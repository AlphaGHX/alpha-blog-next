/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'avatars.githubusercontent.com'],
  },
  env: {
    BACKEND_URL: "http://localhost:12900",
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${this.env.BACKEND_URL}/:path*`,
      }
    ]
  }
}

module.exports = nextConfig
