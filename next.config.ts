import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  agentRules: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
} as NextConfig;

export default nextConfig;
