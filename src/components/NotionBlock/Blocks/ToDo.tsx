"use client";

import type { ToDoBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { BlockWithChildren } from "@/types/notion";
import RichText from "@/components/RichText";

type Props = {
  block: BlockWithChildren<ToDoBlockObjectResponse>;
};

const ToDo = ({ block }: Props) => {
  return (
    <li className="my-2">
      <input
        type="checkbox"
        readOnly
        checked={block.to_do.checked}
        className="pointer-events-none mr-2"
      />
      <RichText text={block.to_do.rich_text} />
    </li>
  );
};

export default ToDo;
