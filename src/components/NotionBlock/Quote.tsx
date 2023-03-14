"use client";

import { QuoteBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { BlockWithChildren } from "@/types/notion";
import { richTextToPlainText } from "@/libs/notion";

type Props = {
  block: BlockWithChildren<QuoteBlockObjectResponse>;
};

const Quote = ({ block }: Props) => {
  return (
    <blockquote key={block.id}>
      {richTextToPlainText(block.quote.rich_text)}
    </blockquote>
  );
};

export default Quote;
