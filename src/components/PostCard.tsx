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
        <div className="rounded-xl border-2 border-gray-200 bg-white p-4 hover:bg-gray-100">
          <h3 className="text-xl font-bold">{post.title}</h3>
          <div className="my-2 max-h-20 overflow-hidden py-2">
            <p>{post.description}</p>
          </div>
          <p className="text-right text-gray-400">{post.createdDate}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostCard;
