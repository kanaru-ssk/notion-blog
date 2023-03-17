import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NotionBlock from "@/components/NotionBlock";
import { getBlocks } from "@/libs/notion/getBlocks";
import { getDatabase } from "@/libs/notion/getDatabase";

type Props = {
  params: { slug: string };
};

const PostPage = async ({ params }: Props) => {
  const posts = await getDatabase({
    database_id: process.env.NOTION_DATABASE,
  });
  const post = posts.find((post) => post.slug === params.slug);
  if (!post) return notFound();
  const blocks = await getBlocks({ block_id: post.id, page_size: 100 });

  return (
    <div className="mx-auto max-w-3xl md:py-20 md:px-4">
      <article className="mx-auto max-w-3xl bg-white px-4 py-12 md:rounded-xl md:px-12">
        {blocks.map((block) => (
          <NotionBlock block={block} key={block.id} />
        ))}
      </article>
    </div>
  );
};

export default PostPage;

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const posts = await getDatabase({
    database_id: process.env.NOTION_DATABASE,
  });
  const post = posts.find((post) => post.slug === params.slug);
  if (!post) return notFound();

  return {
    title: post.title,
    description: post.description,
    openGraph: { images: post.coverImageSrc },
    twitter: { images: post.coverImageSrc, card: "summary" },
  };
};

export const generateStaticParams = async () => {
  const posts = await getDatabase({
    database_id: process.env.NOTION_DATABASE,
  });

  return posts.map((post) => {
    return { slug: post.slug };
  });
};
