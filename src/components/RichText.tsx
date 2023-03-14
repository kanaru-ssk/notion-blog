"use client";

import Link from "next/link";
import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

type Props = {
  text: RichTextItemResponse[];
};

const RichText = ({ text }: Props) => {
  return (
    <>
      {text.map((value, index) => {
        if (!("text" in value)) return null;
        const {
          annotations: { bold, code, color, italic, strikethrough, underline },
          text,
        } = value;
        const style = [
          bold ? "font-bold " : "",
          code ? "rounded bg-gray-200 py-[2px] px-1 font-mono " : "",
          italic ? "italic " : "",
          strikethrough ? "line-through " : "",
          underline ? "underline" : "",
        ].join("");

        return (
          <span
            className={style}
            style={color !== "default" ? { color } : {}}
            key={`${text.content}-${index}`}
          >
            {text.link ? (
              <Link
                href={text.link.url}
                className="text-blue-500 underline hover:text-gray-400"
              >
                {text.content}
              </Link>
            ) : (
              text.content
            )}
          </span>
        );
      })}
    </>
  );
};

export default RichText;
