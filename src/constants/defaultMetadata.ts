import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: "notion-blog",
  description:
    "This is a simple blog application built with Next.js, TypeScript, Notion API, and Tailwind CSS. The application fetches data from a Notion database using the Notion API and displays the data on the frontend. It is designed to be easily customizable and extendable, so you can use it as a starting point for your own blog or website.",
  themeColor: "#fff",
  viewport: "initial-scale=1.0, width=device-width",
  twitter: {
    card: "summary_large_image",
    images: `${process.env.NEXT_PUBLIC_DOMAIN}/ogp.webp`,
  },
  icons: [
    {
      type: "image/svg+xml",
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/favicon.svg`,
    },
  ],
  openGraph: {
    type: "website",
    url: process.env.NEXT_PUBLIC_DOMAIN,
    title: "notion-blog",
    description:
      "This is a simple blog application built with Next.js, TypeScript, Notion API, and Tailwind CSS. The application fetches data from a Notion database using the Notion API and displays the data on the frontend. It is designed to be easily customizable and extendable, so you can use it as a starting point for your own blog or website.",
    siteName: "notion-blog",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/ogp.webp`,
      },
    ],
  },
};
