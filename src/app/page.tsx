import PostCard from "@/components/PostCard";
import { defaultSeo } from "@/constants/defaultSeo";
import { getDatabase } from "@/libs/notion/getDatabase";

export const metadata = {
  title: defaultSeo.title,
  description: defaultSeo.description,
  openGraph: { images: defaultSeo.coverImageSrc },
  twitter: { images: defaultSeo.coverImageSrc, card: "summary" },
};

const Home = async () => {
  const posts = await getDatabase({
    database_id: process.env.NOTION_DATABASE,
    sorts: [
      {
        timestamp: "created_time",
        direction: "descending",
      },
    ],
  });

  return (
    <div className="mx-auto max-w-3xl py-20 px-4">
      <ul>
        {posts.map((post) => {
          return <PostCard post={post} key={post.id} />;
        })}
      </ul>
    </div>
  );
};

export default Home;
