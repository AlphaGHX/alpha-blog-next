/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ultramunch.com','konachan.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
