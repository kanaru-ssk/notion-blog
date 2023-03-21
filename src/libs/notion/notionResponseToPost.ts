import type { GetPageResponse } from "@notionhq/client/build/src/api-endpoints";
import type { Post } from "@/types/notion";
import { richTextToString } from "./richTextToString";

export const notionResponseToPost = (value: GetPageResponse): Post | null => {
  if (!("properties" in value)) return null;

  const title =
    value.properties.Title?.type === "title"
      ? richTextToString(value.properties.Title.title)
      : "No Title";
  const slug =
    value.properties.Slug?.type === "rich_text" &&
    value.properties.Slug.rich_text.length !== 0
      ? richTextToString(value.properties.Slug.rich_text)
      : value.id;
  const description =
    value.properties.Description?.type === "rich_text"
      ? richTextToString(value.properties.Description.rich_text)
      : "";
  const date =
    value.properties.Date?.type === "date" && value.properties.Date.date
      ? value.properties.Date.date.start
      : "";
  const image =
    value.properties.Image?.type === "files" &&
    value.properties.Image.files[0]?.type === "file"
      ? value.properties.Image.files[0].file.url
      : "/ogp.webp";

  return {
    id: value.id,
    title,
    slug,
    description,
    date,
    image,
  };
};
