/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org", "i.ibb.co", "rb.gy"],
  },
};

module.exports = nextConfig;
