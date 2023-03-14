"use client";

import { CodeBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { BlockWithChildren } from "@/types/notion";
import { richTextToPlainText } from "@/libs/notion";

type Props = {
  block: BlockWithChildren<CodeBlockObjectResponse>;
};

const Code = ({ block }: Props) => {
  return (
    <pre>
      <code key={block.id}>{richTextToPlainText(block.code.rich_text)}</code>
    </pre>
  );
};

export default Code;
