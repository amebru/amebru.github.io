/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    // If you're not deploying to the root of your domain, add this:
    // basePath: '/repo-name',
  }
  
  module.exports = nextConfig