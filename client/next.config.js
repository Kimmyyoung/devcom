/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  eslint: {
    dirs: ['pages', 'utils'],
  },
  async generateStaticParams() {
    const paths = {
      '/': { page: '/' },
      '/dashboard': { page: '/dashboard' },
      '/dashboard/blogpost': { page: '/dashboard/blogpost' },
      '/dashboard/calendar': { page: '/dashboard/calendar' },
      '/dashboard/community': { page: '/dashboard/community' },
    };
  
    // Log paths for debugging
    console.log('Generated Paths:', paths);
  
    return paths;
  }
}
 
module.exports = nextConfig
