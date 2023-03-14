/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["s3.us-west-2.amazonaws.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
