import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { Head } from "@/components/Head";
import { PageNation } from "@/components/PageNation";
import { PostCards } from "@/components/PostCards";
import { postsPerPage } from "@/constants/postsPerPage";
import { getAllPosts } from "@/libs/notion";
import type { Post } from "@/types/notion";

type Props = {
  posts: Post[];
  page: {
    pageIndex: number;
    numPages: number;
  };
};

const Page: NextPage<Props> = ({ posts, page }) => {
  return (
    <>
      <Head />
      <div className="bg-gray-200">
        <div className="mx-auto max-w-3xl py-20 px-4">
          <PostCards posts={posts} />
          <PageNation {...page} />
        </div>
      </div>
    </>
  );
};

export default Page;

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (!params || typeof params.page !== "string") return { notFound: true };

  const pageIndex = Number(params.page);
  const allPosts = await getAllPosts();
  const posts = allPosts.slice(
    postsPerPage * (pageIndex - 1),
    postsPerPage * pageIndex
  );
  const numPages = Math.ceil(allPosts.length / postsPerPage);
  return {
    props: {
      posts,
      page: { pageIndex, numPages },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  const numPages = Math.ceil(posts.length / postsPerPage);
  const paths = Array.from({ length: numPages }, (_, i) => {
    return { params: { page: (i + 1).toString() } };
  });
  return { paths, fallback: false };
};
