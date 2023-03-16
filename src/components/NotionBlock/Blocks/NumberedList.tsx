"use client";

import NotionBlock from "@/components/NotionBlock";
import type { NumberedListBlockObjectResponse } from "@/types/notion";

type Props = {
  block: NumberedListBlockObjectResponse;
};

const NumberedList = ({ block }: Props) => {
  return (
    <ol className="my-5 list-decimal pl-7">
      {block.numbered_list.children.map((child) => (
        <NotionBlock block={child} key={child.id} />
      ))}
    </ol>
  );
};

export default NumberedList;
