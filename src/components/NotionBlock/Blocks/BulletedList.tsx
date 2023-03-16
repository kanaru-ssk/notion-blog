"use client";

import type { BulletedListBlockObjectResponse } from "@/types/notion";
import NotionBlock from "@/components/NotionBlock";

type Props = {
  block: BulletedListBlockObjectResponse;
};

const BulletedList = ({ block }: Props) => {
  return (
    <ul className="list-disc pl-7 my-5">
      {block.bulleted_list.children.map((child) => (
        <NotionBlock block={child} key={child.id} />
      ))}
    </ul>
  );
};

export default BulletedList;
