import type { CalloutBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { RichText } from "@/components/NotionBlock/blocks/RichText";
import { SpeechBubble } from "@/components/NotionBlock/blocks/SpeechBubble";
import type { BlockWithChildren } from "@/types/notion";

type Props = {
  block: BlockWithChildren<CalloutBlockObjectResponse>;
};

export const Callout = ({ block }: Props) => {
  if (block.callout.icon?.type === "emoji") {
    const isRam = block.callout.icon.emoji === "🐏";
    const isGorilla = block.callout.icon.emoji === "🦍";
    if (isRam || isGorilla)
      return (
        <div className="my-4">
          <SpeechBubble
            iconImageSrc={isRam ? "/images/ram.png" : "/images/gorilla.png"}
            isReverse={isGorilla}
          >
            <RichText text={block.callout.rich_text} />
          </SpeechBubble>
        </div>
      );
  }

  return (
    <aside className="my-6 flex items-center gap-4 rounded-xl bg-orange-100 p-6 text-gray-800">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-400 font-bold text-white">
        !
      </span>
      <div className="min-w-0 break-words">
        <RichText text={block.callout.rich_text} />
      </div>
    </aside>
  );
};
