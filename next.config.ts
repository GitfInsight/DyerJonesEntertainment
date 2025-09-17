import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Ensure static files are properly served
  trailingSlash: false,
  // Add experimental features for better image handling
  experimental: {
    optimizePackageImports: ['next/image'],
  },
};

export default nextConfig;
