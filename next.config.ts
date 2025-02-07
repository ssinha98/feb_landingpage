import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // This is needed for GIFs
  },
};

export default nextConfig;
