import type {
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { unsupportedBlocks } from "@/constants/unsupportedBlocks";
import type { ExpandedBlockObjectResponse } from "@/types/notion";
import { notion } from "./client";

export const getAllBlocks = async (
  blockId: string
): Promise<ExpandedBlockObjectResponse[]> => {
  const allResults: (BlockObjectResponse | PartialBlockObjectResponse)[] = [];

  let hasMore = true;
  while (hasMore) {
    const res = await notion.blocks.children.list({
      block_id: blockId,
      page_size: 100,
    });
    hasMore = res.has_more;
    allResults.push(...res.results);
  }

  // Fetches all child blocks recursively - be mindful of rate limits if you have large amounts of nested blocks
  // See https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = allResults
    .filter((result): result is BlockObjectResponse => "type" in result)
    .map(async (block) => {
      if (!unsupportedBlocks.includes(block.type) && block.has_children) {
        const children = await getAllBlocks(block.id);
        return { ...block, children };
      }
      return block;
    });

  return await Promise.all(childBlocks).then((blocks) => {
    return blocks.reduce(
      (result: ExpandedBlockObjectResponse[], currentBlock) => {
        const previousBlock =
          0 <= result.length - 1 ? result[result.length - 1] : null;
        if (currentBlock.type === "bulleted_list_item") {
          if (previousBlock && previousBlock.type === "bulleted_list") {
            previousBlock.bulleted_list.children?.push(currentBlock);
          } else {
            result.push({
              id: Math.random().toString(),
              type: "bulleted_list",
              bulleted_list: { children: [currentBlock] },
            });
          }
        } else if (currentBlock.type === "numbered_list_item") {
          if (previousBlock && previousBlock.type === "numbered_list") {
            previousBlock.numbered_list.children?.push(currentBlock);
          } else {
            result.push({
              id: Math.random().toString(),
              type: "numbered_list",
              numbered_list: { children: [currentBlock] },
            });
          }
        } else if (currentBlock.type === "to_do") {
          if (previousBlock && previousBlock.type === "to_do_list") {
            previousBlock.to_do_list.children?.push(currentBlock);
          } else {
            result.push({
              id: Math.random().toString(),
              type: "to_do_list",
              to_do_list: { children: [currentBlock] },
            });
          }
        } else {
          result.push(currentBlock);
        }
        return result;
      },
      []
    );
  });
};
