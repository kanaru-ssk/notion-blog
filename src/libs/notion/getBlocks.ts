import { notion } from "./client";
import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import {
  ExpandedBlockObjectResponse,
  isBulletedListBlockObjectResponse,
  isNumberedListBlockObjectResponse,
} from "@/types/notion";
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
    return blocks.reduce((acc: ExpandedBlockObjectResponse[], curr) => {
      const pre = acc[acc.length - 1];
      if (curr.type === "bulleted_list_item") {
        if (isBulletedListBlockObjectResponse(pre)) {
          pre.bulleted_list.children?.push(curr);
        } else {
          acc.push({
            id: getRandomInt(10 ** 99, 10 ** 100).toString(),
            type: "bulleted_list",
            bulleted_list: { children: [curr] },
          });
        }
      } else if (curr.type === "numbered_list_item") {
        if (isNumberedListBlockObjectResponse(pre)) {
          pre.numbered_list.children?.push(curr);
        } else {
          acc.push({
            id: getRandomInt(10 ** 99, 10 ** 100).toString(),
            type: "numbered_list",
            numbered_list: { children: [curr] },
          });
        }
      } else {
        acc.push(curr);
      }
      return acc;
    }, []);
  });
};
