"use client";

import NotionBlock from "@/components/NotionBlock";
import type { ToDoListBlockObjectResponse } from "@/types/notion";

type Props = {
  block: ToDoListBlockObjectResponse;
};

const ToDoList = ({ block }: Props) => {
  return (
    <ul className="pl-7 my-5">
      {block.to_do_list.children.map((child) => (
        <NotionBlock block={child} key={child.id} />
      ))}
    </ul>
  );
};

export default ToDoList;
