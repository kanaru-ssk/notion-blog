"use client";

import Image from "next/image";
import { useState } from "react";
import type { CodeBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { richTextToPlainText } from "@/libs/notion";
import type { BlockWithChildren } from "@/types/notion";

type Props = {
  block: BlockWithChildren<CodeBlockObjectResponse>;
};

const Code = ({ block }: Props) => {
  const plaintext = richTextToPlainText(block.code.rich_text);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    navigator.clipboard.writeText(plaintext).then(() => {
      // If successful, update the isCopied state value
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    });
  };

  return (
    <pre className="group my-5 p-5 rounded-xl relative whitespace-pre bg-gray-200 font-mono">
      <code>{plaintext}</code>
      <button
        onClick={handleCopyClick}
        className="group/button absolute top-0 right-0 duration-100 m-4 opacity-0 group-hover:opacity-100"
      >
        <span className="absolute -translate-x-1/2 -translate-y-8 bg-slate-800 duration-100 text-white rounded px-2 py-1 text-xs opacity-0 group-hover/button:opacity-80">
          {isCopied ? "Copied!" : "Copy"}
        </span>
        <Image src="copy-icon.svg" alt="copy-icon" width={20} height={20} />
      </button>
    </pre>
  );
};

export default Code;
