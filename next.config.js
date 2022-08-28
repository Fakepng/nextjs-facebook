/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'platform-lookaside.fbsbx.com',
      'firebasestorage.googleapis.com',
      'loremflickr.com',
      'cloudflare-ipfs.com',
    ],
  },
}

module.exports = nextConfig
