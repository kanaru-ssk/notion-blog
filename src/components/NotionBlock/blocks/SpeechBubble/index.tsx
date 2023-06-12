import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { Bubble } from "./Bubble";
import { SpeechIcon } from "./SpeechIcon";

type Props = {
  children: ReactNode;
  iconImageSrc: string | StaticImageData;
  isReverse?: boolean;
};

export const SpeechBubble = ({ children, iconImageSrc, isReverse }: Props) => {
  return (
    <div
      className={`${isReverse ? "flex-row-reverse" : ""} flex items-end gap-3`}
    >
      <SpeechIcon src={iconImageSrc} />
      <Bubble isReverse={isReverse}>{children}</Bubble>
    </div>
  );
};
