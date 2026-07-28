/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 414, 640, 768, 1024, 1280, 1536, 1920, 2560],
    imageSizes: [96, 160, 256, 384, 512],
    minimumCacheTTL: 31536000
  }
};

export default nextConfig;
