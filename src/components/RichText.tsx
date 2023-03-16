"use client";

import Link from "next/link";
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

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
          bold && "font-bold",
          italic && "italic",
          strikethrough && "line-through",
          underline && "underline",
        ]
          .filter(Boolean)
          .join(" ");

        if (text.link)
          return (
            <span
              className={style || undefined}
              style={color !== "default" ? { color } : {}}
              key={`${text.content}-${index}`}
            >
              <Link
                href={text.link.url}
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                {text.content}
              </Link>
            </span>
          );

        if (code)
          return (
            <span
              className={style || undefined}
              style={color !== "default" ? { color } : {}}
              key={`${text.content}-${index}`}
            >
              <code className="rounded bg-gray-200 py-1 px-2 font-mono text-sm">
                {text.content}
              </code>
            </span>
          );

        return (
          <span
            className={style || undefined}
            style={color !== "default" ? { color } : {}}
            key={`${text.content}-${index}`}
          >
            {text.content}
          </span>
        );
      })}
    </>
  );
};

export default RichText;
