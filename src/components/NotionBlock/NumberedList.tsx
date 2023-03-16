"use client";

import type { NumberedListBlockObjectResponse } from "@/types/notion";
import NotionBlock from "@/components/NotionBlock";

type Props = {
  block: NumberedListBlockObjectResponse;
};

const NumberedList = ({ block }: Props) => {
  return (
    <ol className="list-decimal pl-7 my-5">
      {block.numbered_list.children.map((child) => (
        <NotionBlock block={child} key={child.id} />
      ))}
    </ol>
  );
};

export default NumberedList;
