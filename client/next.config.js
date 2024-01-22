/**
 * @type {import('next').NextConfig}
 */

const isProduction = process.env.NODE_ENV === 'production';


const nextConfig = {
  eslint: {
    dirs: ['pages', 'utils'],
  },
  assetPrefix: isProduction ? 'https://devcom-kim.netlify.app/' : '',
  reactStrictMode: true,
  images: {
    domains: ['devcom-kim.netlify.app'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/app',
        permanent: true,
      },
    ];
  }
}

module.exports = nextConfig;
