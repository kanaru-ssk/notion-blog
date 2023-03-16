"use client";

import type { ColumnListBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import NotionBlock from "@/components/NotionBlock";
import type { BlockWithChildren } from "@/types/notion";

type Props = {
  block: BlockWithChildren<ColumnListBlockObjectResponse>;
};

const ColumnList = ({ block }: Props) => {
  return (
    <div className="gap-4 my-5 flex w-full justify-around">
      {block.children &&
        block.children.map((block) => (
          <NotionBlock block={block} key={block.id} />
        ))}
    </div>
  );
};

export default ColumnList;
