import type { AudioBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { BlockWithChildren } from "@/types/notion";

type Props = {
  block: BlockWithChildren<AudioBlockObjectResponse>;
};

export const Audio = ({ block: { audio } }: Props) => {
  return (
    <div className="my-4">
      <audio controls className="w-full">
        <source
          src={audio.type === "file" ? audio.file.url : audio.external.url}
          type="audio/ogg"
        />
        <source
          src={audio.type === "file" ? audio.file.url : audio.external.url}
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};
