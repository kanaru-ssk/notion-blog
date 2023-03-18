/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["s3.us-west-2.amazonaws.com", "picsum.photos"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
