"use client";

import type { VideoBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { BlockWithChildren } from "@/types/notion";
import { getYouTubeId } from "@/utils.ts/getYoutubeId";

type Props = {
  block: BlockWithChildren<VideoBlockObjectResponse>;
};

const Video = ({ block }: Props) => {
  if (block.video.type === "file") {
    return (
      <video controls className="h-40 w-72 md:h-52 md:w-96">
        <source src={block.video.file.url} />
      </video>
    );
  } else if (block.video.type === "external") {
    const videoId = getYouTubeId(block.video.external.url);
    if (videoId)
      return (
        <div className="m-1.5">
          <iframe
            width={560}
            height={315}
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-40 w-72 md:h-52 md:w-96"
          ></iframe>
        </div>
      );
  }
  return null;
};

export default Video;
