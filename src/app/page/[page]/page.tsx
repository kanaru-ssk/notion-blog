import { notFound } from "next/navigation";
import { PageNation } from "@/components/PageNation";
import { PostCards } from "@/components/PostCards";
import { postsPerPage } from "@/constants/postsPerPage";
import { getAllPosts } from "@/libs";

const Page = async ({ params }: { params: { page: string } }) => {
  if (!params || typeof params.page !== "string") return notFound();

  const pageIndex = Number(params.page);
  const allPosts = await getAllPosts();
  const posts = allPosts.slice(
    postsPerPage * (pageIndex - 1),
    postsPerPage * pageIndex,
  );
  const numPages = Math.ceil(allPosts.length / postsPerPage);

  if (numPages < pageIndex) return notFound();

  return (
    <div className="bg-gray-200">
      <div className="mx-auto max-w-3xl px-4 py-20">
        <PostCards posts={posts} />
        <PageNation pageIndex={pageIndex} numPages={numPages} />
      </div>
    </div>
  );
};

export default Page;

export const generateStaticParams = async () => {
  const posts = await getAllPosts();
  const numPages = Math.ceil(posts.length / postsPerPage);
  return Array.from({ length: numPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
};
