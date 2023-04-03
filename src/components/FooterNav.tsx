import Link from "next/link";
import { Post } from "@/types/notion";

type Props = {
  prevPost: Post | null;
  nextPost: Post | null;
};

export const FooterNav = ({ prevPost, nextPost }: Props) => {
  return (
    <nav className="flex h-28 items-center border-y border-gray-200">
      <div className="h-full flex-1">
        {prevPost ? (
          <Link href={`/${prevPost.slug}`}>
            <FooterNavItem title={prevPost.title} order="previous" />
          </Link>
        ) : (
          <FooterNavItem order="previous" />
        )}
      </div>
      <Link href="/">
        <div className="border-x py-6 px-4 hover:bg-gray-100">Home</div>
      </Link>
      <div className="h-full flex-1">
        {nextPost ? (
          <Link href={`/${nextPost.slug}`}>
            <FooterNavItem title={nextPost.title} order="next" />
          </Link>
        ) : (
          <FooterNavItem order="next" />
        )}
      </div>
    </nav>
  );
};

type FooterNavItemProps = {
  title?: string;
  order: "previous" | "next";
};

const FooterNavItem = ({ title, order }: FooterNavItemProps) => {
  return (
    <div className={`h-full p-4 ${title && "hover:bg-gray-100"}`}>
      <h3 className="text-md font-bold">{order}</h3>
      <p className={`mt-1 h-12 overflow-hidden ${!title && "text-gray-400"}`}>
        {title ?? "no post"}
      </p>
    </div>
  );
};
