"use client";

import type { QuoteBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { BlockWithChildren } from "@/types/notion";
import { richTextToPlainText } from "@/libs/notion";

type Props = {
  block: BlockWithChildren<QuoteBlockObjectResponse>;
};

const Quote = ({ block }: Props) => {
  return (
    <blockquote className="text-sm my-5 border-l-4 text-gray-600 border-l-gray-400 py-1 pl-3">
      {richTextToPlainText(block.quote.rich_text)}
    </blockquote>
  );
};

export default Quote;
