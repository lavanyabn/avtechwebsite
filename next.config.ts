import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'avtech.local',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],  
  }
};

export default nextConfig;
