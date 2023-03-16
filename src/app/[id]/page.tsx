import type { Metadata } from "next";
import NotionBlock from "@/components/NotionBlock";
import { getPage, getBlocks } from "@/libs/notion";

type Props = {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const page = await getPage({ page_id: params.id });
  return {
    title: page.title,
    description: page.description,
  };
};

const PostPage = async ({ params }: Props) => {
  const block_id = params.id.replaceAll("-", "");
  const blocks = await getBlocks({ block_id, page_size: 100 });
  return (
    <article className="mx-auto max-w-3xl p-12 rounded-xl bg-white">
      {blocks.map((block) => (
        <NotionBlock block={block} key={block.id} />
      ))}
    </article>
  );
};

export default PostPage;
