/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    scrollRestoration: false,
  },
  transpilePackages: ["geist"],
};

module.exports = nextConfig;
