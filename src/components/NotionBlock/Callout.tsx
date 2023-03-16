"use client";

import type { CalloutBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import RichText from "@/components/RichText";
import type { BlockWithChildren } from "@/types/notion";

type Props = {
  block: BlockWithChildren<CalloutBlockObjectResponse>;
};

const Callout = ({ block }: Props) => {
  return (
    <aside className="p-6 bg-orange-100 my-6 flex gap-4 rounded-xl items-center text-gray-800">
      <span className="shrink-0 flex items-center justify-center w-6 h-6 bg-orange-400 text-white rounded-full font-bold">
        !
      </span>
      <div className="min-w-0 break-words">
        <RichText text={block.callout.rich_text} />
      </div>
    </aside>
  );
};

export default Callout;
