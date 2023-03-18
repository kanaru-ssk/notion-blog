import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

type Props = {
  url: string;
};

const Instagram = ({ url }: Props) => {
  return (
    <div className="my-5">
      <blockquote
        className="instagram-media w-full min-w-[326px] max-w-[540px] rounded border-2 border-gray-100 bg-white drop-shadow-md"
        data-instgrm-captioned
        data-instgrm-permalink={url}
        data-instgrm-version="14"
      >
        <Link
          href={url}
          className="w-full bg-white text-center leading-[0]"
          target="_blank"
        >
          <div className="flex items-center p-[10px]">
            <div className="mr-4 h-8 w-8 rounded-full bg-gray-100"></div>
            <div>
              <div className="mb-2 h-3 w-24 rounded bg-gray-100"></div>
              <div className="h-3 w-16 rounded bg-gray-100"></div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 bg-gray-100 py-24">
            <div className="mx-auto w-[50px]">
              <Image
                src="/instagram-icon.svg"
                alt="instagram-icon"
                width={50}
                height={50}
              />
            </div>
            <div className="text-sm  font-semibold leading-[18px] text-blue-600">
              View this post on Instagram
            </div>
          </div>
          <div className="h-36"></div>
        </Link>
      </blockquote>
      <Script async src="//www.instagram.com/embed.js" />
    </div>
  );
};

export default Instagram;
