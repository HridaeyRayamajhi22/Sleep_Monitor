import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["img.clerk.com"], // or whatever domain your user.imageUrl points to
  },

};

export default nextConfig;
