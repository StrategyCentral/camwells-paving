/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'camwellspaving.com.au' },
    ],
  },
}
module.exports = nextConfig
