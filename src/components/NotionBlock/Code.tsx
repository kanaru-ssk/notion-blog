"use client";

import { CodeBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { BlockWithChildren } from "@/types/notion";
import { richTextToPlainText } from "@/libs/notion";

type Props = {
  block: BlockWithChildren<CodeBlockObjectResponse>;
};

const Code = ({ block }: Props) => {
  return (
    <pre className="my-2 rounded bg-gray-200 p-4 font-mono">
      <code key={block.id}>{richTextToPlainText(block.code.rich_text)}</code>
    </pre>
  );
};

export default Code;
