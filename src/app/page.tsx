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
  const posts = (
    await getDatabase({
      database_id: process.env.NOTION_DATABASE,
    })
  ).sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if (dateA === dateB) return 0;
    if (dateA < dateB) return 1;
    return -1;
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
