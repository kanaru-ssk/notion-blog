"use client";

import type { ToDoListBlockObjectResponse } from "@/types/notion";
import NotionBlock from "@/components/NotionBlock";

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
