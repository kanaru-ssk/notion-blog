"use client";

import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/types/notion";

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  if (post.isNotFound) return null;
  return (
    <li className="my-4 h-24 w-full rounded-xl bg-white duration-150 hover:-translate-y-1 hover:drop-shadow-md md:my-8 md:h-48">
      <Link href={`/${post.id}`}>
        <div className="flex">
          <Image
            src={post.coverImageSrc}
            alt="opg-image"
            width={256}
            height={144}
            className="h-24 w-32 rounded-l-xl object-cover md:h-48 md:w-64"
          />
          <article className="relative flex-1 px-4 py-2 md:py-4">
            <h3 className="text-md max-h-12 overflow-hidden font-bold md:max-h-14 md:text-xl">
              {post.title}
            </h3>
            <div className="hidden max-h-4 overflow-hidden py-2 text-gray-500 md:block md:max-h-20">
              <p>{post.description}</p>
            </div>
            <p className="absolute bottom-2 right-4 text-xs text-gray-400 md:bottom-4">
              {post.createdDate}
            </p>
          </article>
        </div>
      </Link>
    </li>
  );
};

export default PostCard;
