import type { GetPageParameters } from "@notionhq/client/build/src/api-endpoints";
import type { Post } from "@/types/notion";
import { notion } from "./client";
import { pageResponseToPost } from "./pageResponseToPost";

export const getPage = async (params: GetPageParameters): Promise<Post> => {
  const result = await notion.pages.retrieve(params);
  return pageResponseToPost(result);
};
