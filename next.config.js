const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
})

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
  swcMinify: true,
  reactStrictMode: true,
  eslint: {
    dirs: ["src"],
  },
  env: {
    NEXT_PUBLIC_ENV: 'PRODUCTION',
    NEXT_PUBLIC_ANALYZE: 'true',
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_KEY: process.env.NEXT_PUBLIC_SUPABASE_KEY
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xudvhxwolsxldijaphhq.supabase.co',
      }, {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
});
