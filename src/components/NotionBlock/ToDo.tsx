"use client";

import { ToDoBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { BlockWithChildren } from "@/types/notion";
import RichText from "@/components/RichText";

type Props = {
  block: BlockWithChildren<ToDoBlockObjectResponse>;
};

const ToDo = ({ block }: Props) => {
  return (
    <div className="my-2">
      <label htmlFor={block.id} className="cursor-pointer">
        <input
          type="checkbox"
          id={block.id}
          defaultChecked={block.to_do.checked}
        />
        <span className="ml-2">
          <RichText text={block.to_do.rich_text} />
        </span>
      </label>
    </div>
  );
};

export default ToDo;
