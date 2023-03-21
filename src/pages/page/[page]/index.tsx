import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Head from "@/components/Head";
import PostCards from "@/components/PostCards";
import { getAllPosts } from "@/libs/notion";
import { Post } from "@/types/notion";
import { postsPerPage } from "@/constants/postsPerPage";
import PageNation from "@/components/PageNation";

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
      <div className="mx-auto max-w-3xl py-20 px-4">
        <PostCards posts={posts} />
        <PageNation {...page} />
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
