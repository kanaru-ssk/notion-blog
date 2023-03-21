import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

export const richTextToString = (richText: RichTextItemResponse[]) => {
  return richText.reduce(
    (plainText, currentText) => plainText + currentText.plain_text,
    ""
  );
};
