/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  eslint: {
    dirs: ['pages', 'utils'],
  },
  // output: 'export',
  // generateStaticParams() {
  //   const paths = {
  //     '/': { page: '/' },
  //     '/dashboard': { page: '/dashboard' },
  //     '/dashboard/blogpost': { page: '/dashboard/blogpost' },
  //     '/dashboard/calendar': { page: '/dashboard/calendar' },
  //     '/dashboard/community': { page: '/dashboard/community' },
  //   };

  //   console.log('Generated Paths:', paths);
  
  //   return paths;
  // },
}

module.exports = nextConfig;