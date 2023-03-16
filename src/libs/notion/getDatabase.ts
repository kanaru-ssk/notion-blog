import type { QueryDatabaseParameters } from "@notionhq/client/build/src/api-endpoints";
import type { Post } from "@/types/notion";
import { notion } from "./client";
import { pageResponseToPost } from "./pageResponseToPost";

export const getDatabase = async (
  params: QueryDatabaseParameters
): Promise<Post[]> => {
  const res = await notion.databases.query(params);
  return res.results.map((result) => pageResponseToPost(result));
};
