"use client";

import type { QuoteBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { richTextToPlainText } from "@/libs/notion";
import type { BlockWithChildren } from "@/types/notion";

type Props = {
  block: BlockWithChildren<QuoteBlockObjectResponse>;
};

const Quote = ({ block }: Props) => {
  return (
    <blockquote className="my-5 border-l-4 border-l-gray-400 py-1 pl-3 text-sm text-gray-600">
      {richTextToPlainText(block.quote.rich_text)}
    </blockquote>
  );
};

export default Quote;
