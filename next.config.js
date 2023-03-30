/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "notion-blog.kanaru.jp",
      "kanaru.jp",
      "s3.us-west-2.amazonaws.com",
      "picsum.photos",
    ],
    formats: ["image/avif", "image/webp"],
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/page/1",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/page/1",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
