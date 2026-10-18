import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow speaker photos hosted elsewhere. Narrow this to your own domains before going live.
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

export default nextConfig;
