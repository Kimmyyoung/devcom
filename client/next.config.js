/**
 * @type {import('next').NextConfig}
 */

const isProduction = process.env.NODE_ENV === 'production';


const nextConfig = {
  eslint: {
    dirs: ['pages', 'utils'],
  },
  assetPrefix: isProduction ? 'https://main--devcom-kim.netlify.app/' : '',
}

module.exports = nextConfig;
