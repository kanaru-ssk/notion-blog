import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

export const richTextToPlainText = (richText: RichTextItemResponse[]) => {
  return richText.reduce(
    (plainText, currentText) => plainText + currentText.plain_text,
    ""
  );
};
