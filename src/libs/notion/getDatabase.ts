import "server-only";

import type { QueryDatabaseParameters } from "@notionhq/client/build/src/api-endpoints";
import type { Post } from "@/types/notion";
import { notion } from "./client";
import { pageResponseToPost } from "./pageResponseToPost";

export const getDatabase = async (
  params: QueryDatabaseParameters
): Promise<Post[]> => {
  const posts = await notion.databases.query(params);
  return posts.results
    .map((result) => pageResponseToPost(result))
    .filter((v): v is Post => Boolean(v));
};
