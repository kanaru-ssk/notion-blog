import type { ToDoBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { RichText } from "@/components/NotionBlock/blocks/RichText";
import type { BlockWithChildren } from "@/types/notion";

type Props = {
  block: BlockWithChildren<ToDoBlockObjectResponse>;
};

export const ToDo = ({ block }: Props) => {
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
