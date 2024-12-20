/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Add any domains you're loading images from
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Add this section to handle dynamic routes
  // async rewrites() {
  //   return [
  //     {
  //       source: '/artists/:id',
  //       destination: '/artists/[id]',
  //     },
  //   ];
  // },
}

module.exports = nextConfig

