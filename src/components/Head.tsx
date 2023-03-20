import NextHead from "next/head";
import { defaultMetadata } from "@/constants/defaultMetadata";

type Props = {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
};

const Head = ({ title, description, image, path }: Props) => {
  return (
    <NextHead>
      <meta
        property="og:url"
        content={path ? `${defaultMetadata.url}/${path}` : defaultMetadata.url}
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image ?? defaultMetadata.image} />
      <meta property="og:title" content={title ?? defaultMetadata.title} />
      <meta
        property="og:description"
        content={description ?? defaultMetadata.description}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="description"
        content={description ?? defaultMetadata.description}
      />
    </NextHead>
  );
};

export default Head;
