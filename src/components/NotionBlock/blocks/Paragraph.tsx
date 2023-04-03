import type { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionBlock } from "@/components/NotionBlock";
import { RichText } from "@/components/NotionBlock/blocks/RichText";
import type { BlockWithChildren } from "@/types/notion";

type Props = {
  block: BlockWithChildren<ParagraphBlockObjectResponse>;
};

export const Paragraph = ({ block }: Props) => {
  return (
    <>
      <p className="mt-1 min-h-[18px]">
        <RichText text={block.paragraph.rich_text} />
      </p>
      {block.children && (
        <div className="ml-4">
          {block.children.map((child) => (
            <NotionBlock block={child} key={child.id} />
          ))}
        </div>
      )}
    </>
  );
};
