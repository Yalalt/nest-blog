const removeImports = require('next-remove-imports')();

/** @type {import('next').NextConfig} */
const nextConfig = removeImports({
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'nest-blog.s3.us-east-1.amazonaws.com',
      },
    ],
  },
});

module.exports = nextConfig;
