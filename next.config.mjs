/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'], // Aktifkan WebP & AVIF
  },
};

export default nextConfig;
