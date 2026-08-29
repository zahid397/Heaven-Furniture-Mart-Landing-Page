/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Local files only - no remote patterns needed.
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
