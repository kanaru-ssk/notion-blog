import { NotionBlock } from "@/components/NotionBlock";
import type { BulletedListBlockObjectResponse } from "@/types/notion";

type Props = {
  block: BulletedListBlockObjectResponse;
};

export const BulletedList = ({ block }: Props) => {
  return (
    <ul className="my-5 list-disc pl-7">
      {block.bulleted_list.children.map((child) => (
        <NotionBlock block={child} key={child.id} />
      ))}
    </ul>
  );
};
