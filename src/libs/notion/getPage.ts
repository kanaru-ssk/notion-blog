import { notion } from "./client";
import { richTextToPlainText } from "./richTextToPlainText";
import type { GetPageParameters } from "@notionhq/client/build/src/api-endpoints";
import type { Post } from "@/types/notion";

export const getPage = async (params: GetPageParameters): Promise<Post> => {
  const result = await notion.pages.retrieve(params);
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
  const createdDate = new Date(result.created_time).toLocaleDateString();

  return {
    id: result.id,
    title,
    description,
    createdDate,
  };
};
