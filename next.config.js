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
    NEXT_PUBLIC_SUPABASE_REFERENCE: process.env.NEXT_PUBLIC_SUPABASE_REFERENCE,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_KEY: process.env.NEXT_PUBLIC_SUPABASE_KEY
  },
  // TODO: Remove this before production
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd24ovhgu8s7341.cloudfront.net',
      },
    ],
  },
});
