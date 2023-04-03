import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/types/notion";

type Props = {
  posts: Post[];
};

export const PostCards = ({ posts }: Props) => {
  return (
    <ul className="flex flex-col gap-4 md:gap-8">
      {posts.map((post) => {
        return <PostCard post={post} key={post.id} />;
      })}
    </ul>
  );
};

type PostCardProps = {
  post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
  return (
    <li className="h-24 rounded-md bg-white hover:drop-shadow-md md:h-48">
      <Link href={`/${post.slug}`}>
        <article className="flex h-full">
          <Image
            src={post.image}
            alt="cover-image"
            width={256}
            height={192}
            priority
            className="h-full w-32 rounded-l-md object-cover md:w-64"
          />
          <div className="relative m-4 w-full">
            <h3 className="text-md max-h-12 overflow-hidden font-bold md:max-h-14 md:text-xl">
              {post.title}
            </h3>
            <p className="hidden max-h-20 overflow-hidden py-2 text-gray-400 md:block">
              {post.description}
            </p>
            <p className="absolute bottom-0 right-0 text-xs text-gray-400">
              {post.date}
            </p>
          </div>
        </article>
      </Link>
    </li>
  );
};
