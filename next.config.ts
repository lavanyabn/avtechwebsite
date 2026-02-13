import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'develop.avinyatechknows.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],  
  }
};

export default nextConfig;
