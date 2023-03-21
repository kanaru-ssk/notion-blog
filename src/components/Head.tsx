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
      <title>{title ?? defaultMetadata.title}</title>
      <meta
        name="description"
        content={description ?? defaultMetadata.description}
      />
      <meta property="og:title" content={title ?? defaultMetadata.title} />
      <meta
        property="og:description"
        content={description ?? defaultMetadata.description}
      />
      <meta
        property="og:url"
        content={path ? `${defaultMetadata.url}/${path}` : defaultMetadata.url}
      />
      <meta property="og:image" content={image ?? defaultMetadata.image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="theme-color" content={defaultMetadata.themeColor} />
      <link rel="icon" type="image/svg+xml" href={defaultMetadata.icon} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </NextHead>
  );
};

export default Head;
