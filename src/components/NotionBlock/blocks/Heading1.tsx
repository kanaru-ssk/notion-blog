import type { Heading1BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import RichText from "@/components/NotionBlock/blocks/RichText";

type Props = {
  block: Heading1BlockObjectResponse;
};

const Heading1 = ({ block }: Props) => {
  return (
    <h1 className="mb-6 text-3xl font-bold">
      <RichText text={block.heading_1.rich_text} />
    </h1>
  );
};

export default Heading1;
