"use client";

import Link from "next/link";
import type { Post } from "@/types/notion";

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  return (
    <li className="my-4 list-none">
      <Link href={`/${post.id}`}>
        <div className="rounded-md border-2 border-gray-200 p-2 hover:bg-gray-200">
          <h3 className="text-xl font-bold">{post.title}</h3>
          <p>{post.description}</p>
          <p className="text-right text-gray-400">{post.date}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostCard;
