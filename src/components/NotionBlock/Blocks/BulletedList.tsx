"use client";

import NotionBlock from "@/components/NotionBlock";
import type { BulletedListBlockObjectResponse } from "@/types/notion";

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
