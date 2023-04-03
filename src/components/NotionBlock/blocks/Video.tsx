import type { VideoBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { BlockWithChildren } from "@/types/notion";
import { YouTube } from "./embed/YouTube";

type Props = {
  block: BlockWithChildren<VideoBlockObjectResponse>;
};

export const Video = ({ block }: Props) => {
  if (block.video.type === "file") {
    return (
      <video controls className="h-40 w-72 md:h-52 md:w-96">
        <source src={block.video.file.url} type="video/mp4" />
        <source src={block.video.file.url} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    );
  } else if (block.video.type === "external") {
    const { url } = block.video.external;
    if (url.includes("youtu.be") || url.includes("youtube.com"))
      return <YouTube url={url} />;

    return (
      <video controls className="h-40 w-72 md:h-52 md:w-96">
        <source src={block.video.external.url} />
      </video>
    );
  }
  return null;
};
