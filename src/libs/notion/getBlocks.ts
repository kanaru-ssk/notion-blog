import { notion } from "./client";
import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ExpandedBlockObjectResponse } from "@/types/notion";
import { getRandomInt } from "@/utils/getRandomInt";

export const getBlocks = async (
  block_id: string
): Promise<ExpandedBlockObjectResponse[]> => {
  block_id = block_id.replaceAll("-", "");

  const { results } = await notion.blocks.children.list({
    block_id,
    page_size: 100,
  });

  // Fetches all child blocks recursively - be mindful of rate limits if you have large amounts of nested blocks
  // See https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = results
    .filter((result): result is BlockObjectResponse =>
      result.hasOwnProperty("type")
    )
    .map(async (block) => {
      if (block.has_children) {
        const children = await getBlocks(block.id);
        return { ...block, children };
      }
      return block;
    });

  return await Promise.all(childBlocks).then((blocks) => {
    return blocks.reduce(
      (result: ExpandedBlockObjectResponse[], currentBlock) => {
        const previousBlock = result[result.length - 1];
        if (currentBlock.type === "bulleted_list_item") {
          if (previousBlock.type === "bulleted_list") {
            previousBlock.bulleted_list.children?.push(currentBlock);
          } else {
            result.push({
              id: getRandomInt(10 ** 99, 10 ** 100).toString(),
              type: "bulleted_list",
              bulleted_list: { children: [currentBlock] },
            });
          }
        } else if (currentBlock.type === "numbered_list_item") {
          if (previousBlock.type === "numbered_list") {
            previousBlock.numbered_list.children?.push(currentBlock);
          } else {
            result.push({
              id: getRandomInt(10 ** 99, 10 ** 100).toString(),
              type: "numbered_list",
              numbered_list: { children: [currentBlock] },
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
