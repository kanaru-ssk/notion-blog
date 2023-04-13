import Image from "next/image";

type Props = {
  src: string;
};

export const SpeechIcon = ({ src }: Props) => {
  return (
    <Image
      src={src}
      height="96"
      width="96"
      alt="speech-icon"
      className="h-12 w-12 shrink-0 rounded-full border border-slate-100"
    />
  );
};
