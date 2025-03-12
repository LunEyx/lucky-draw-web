import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shop.san-x.co.jp',
        port: '',
        pathname: '/**',
        search: ''
      }]
  }
};

export default nextConfig;
