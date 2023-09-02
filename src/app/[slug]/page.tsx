import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FooterNav } from "@/components/FooterNav";
import { NotionBlock } from "@/components/NotionBlock";
import { getAllBlocks, getAllPosts } from "@/libs";

const PostPage = async ({ params }: { params: { slug: string } }) => {
  if (!params || typeof params.slug !== "string") return notFound();

  const allPosts = await getAllPosts();
  const targetPostIndex = allPosts.findIndex((v) => v.slug === params.slug);
  if (targetPostIndex === -1) return notFound();

  const post = allPosts[targetPostIndex];
  const prevPost =
    targetPostIndex + 1 < allPosts.length
      ? allPosts[targetPostIndex + 1]
      : null;
  const nextPost =
    0 <= targetPostIndex - 1 ? allPosts[targetPostIndex - 1] : null;

  const blocks = await getAllBlocks(post.id);

  return (
    <div className="bg-gray-200">
      <div className="mx-auto max-w-3xl md:px-4 md:py-20">
        <article className="rounded-md bg-white px-4 py-12 md:px-12">
          {blocks.map((block) => (
            <NotionBlock block={block} key={block.id} />
          ))}
          <div className="mt-20">
            <FooterNav prevPost={prevPost} nextPost={nextPost} />
          </div>
        </article>
      </div>
    </div>
  );
};

export default PostPage;

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  if (!params || typeof params.slug !== "string") return notFound();

  const allPosts = await getAllPosts();
  const targetPostIndex = allPosts.findIndex((v) => v.slug === params.slug);
  if (targetPostIndex === -1) return notFound();

  const post = allPosts[targetPostIndex];

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/${post.slug}`,
      images: [{ url: post.image }],
    },
  };
};

export const generateStaticParams = async () => {
  const posts = await getAllPosts();
  return posts.map(({ slug }) => ({ slug }));
};
