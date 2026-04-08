import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.test.cyberia.studio', // Разрешаем домен API
      },
    ],
  },
};

export default nextConfig;
