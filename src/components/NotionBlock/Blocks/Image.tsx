import NextImage from "next/image";
import type { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { richTextToPlainText } from "@/libs/notion";
import type { BlockWithChildren } from "@/types/notion";

type Props = {
  block: BlockWithChildren<ImageBlockObjectResponse>;
};

const Image = ({ block }: Props) => {
  const src =
    block.image.type === "external"
      ? block.image.external.url
      : block.image.file.url;
  const caption = block.image.caption
    ? richTextToPlainText(block.image.caption)
    : "";
  return (
    <figure className="my-6">
      <NextImage
        src={src}
        alt={caption}
        width={700}
        height={475}
        className="h-auto w-full"
        title={caption}
      />
      {caption && (
        <figcaption className="text-xs text-gray-400">{caption}</figcaption>
      )}
    </figure>
  );
};

export default Image;
