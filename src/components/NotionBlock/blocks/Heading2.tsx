import type { Heading2BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { RichText } from "@/components/NotionBlock/blocks/RichText";

type Props = {
  block: Heading2BlockObjectResponse;
};

export const Heading2 = ({ block }: Props) => {
  return (
    <h2 className="mt-12 mb-4 text-2xl font-bold">
      <RichText text={block.heading_2.rich_text} />
    </h2>
  );
};
