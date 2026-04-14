import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'cyberia-task'; 

const nextConfig: NextConfig = {
  output: 'export',
  
  basePath: isProd ? `/${repoName}` : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.test.cyberia.studio',
      },
    ],
  },
};

export default nextConfig;