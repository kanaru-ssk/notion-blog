import { ReactNode } from "react";
import { Bubble } from "./Bubble";
import { SpeechIcon } from "./SpeechIcon";

type Props = {
  children: ReactNode;
  iconImageSrc: string;
  isReverse?: boolean;
};

export const SpeechBubble = ({ children, iconImageSrc, isReverse }: Props) => {
  return (
    <div
      className={`${isReverse ? "flex-row-reverse" : ""} flex items-end gap-4`}
    >
      <SpeechIcon src={iconImageSrc} />
      <Bubble isReverse={isReverse}>{children}</Bubble>
    </div>
  );
};
