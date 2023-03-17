"use client";

import type { EmbedBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { useEffect, useReducer } from "react";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import type { BlockWithChildren } from "@/types/notion";

type Props = {
  block: BlockWithChildren<EmbedBlockObjectResponse>;
};

const Embed = ({ block }: Props) => {
  const { url } = block.embed;
  const [isClient, setIsClient] = useReducer(() => true, false);
  useEffect(() => {
    setIsClient();
  }, []);
  if (!isClient) return null;
  const isInstagram = url.includes("instagram.com");
  if (isInstagram)
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
                この投稿をInstagramで見る
              </div>
            </div>
            <div className="h-36"></div>
          </Link>
        </blockquote>
        <Script src="//www.instagram.com/embed.js" />
      </div>
    );
  return null;
};

export default Embed;
