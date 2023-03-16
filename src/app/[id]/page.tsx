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
    <div className="mx-auto md:py-20 md:px-4 max-w-3xl">
      <article className="mx-auto px-4 max-w-3xl md:px-12 py-12 md:rounded-xl bg-white">
        {blocks.map((block) => (
          <NotionBlock block={block} key={block.id} />
        ))}
      </article>
    </div>
  );
};

export default PostPage;
