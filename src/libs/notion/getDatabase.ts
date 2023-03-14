import { notion } from "./client";
import { richTextToPlainText } from "./richTextToPlainText";
import type { Post } from "@/types/notion";
import type { QueryDatabaseParameters } from "@notionhq/client/build/src/api-endpoints";

export const getDatabase = async (
  params: QueryDatabaseParameters
): Promise<Post[]> => {
  const res = await notion.databases.query(params);

  return res.results.map((result) => {
    if (!("properties" in result))
      throw new Error("result is not PageObjectResponse");
    if (result.properties.Title.type !== "title")
      throw new Error("Title is not title");
    if (result.properties.Description.type !== "rich_text")
      throw new Error("Description is not rich_text");

    const title = richTextToPlainText(result.properties.Title.title);
    const description = richTextToPlainText(
      result.properties.Description.rich_text
    );
    const date = new Date(result.created_time).toLocaleDateString();

    return {
      id: result.id,
      title,
      description,
      date,
    };
  });
};
