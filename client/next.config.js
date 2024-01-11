module.exports = {
  eslint: {
    dirs: ['pages', 'utils'], 
  },
  distDir: 'build',
  generateStaticParams: async function () {
    const paths = {
      '/': { page: '/' },
      '/dashboard': { page: '/dashboard' },
      '/dashboard/blogpost' : { page: '/dashboard/blogpost' },
      '/dashboard/calendar' : { page: '/dashboard/calendar' },
      '/dashboard/community' : { page: '/dashboard/community' },
    };

    return paths;
  },
}