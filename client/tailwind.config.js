module.exports = {
  darkMode: 'class',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        pretendardRegular: ['pretendardRegular', 'sans-serif'],
        pretendardBold: ['pretendardBold', 'sans-serif'],
        pretendardSemiBold: ['pretendardSemiBold', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
      },
      colors: {
        gray: '#F5F5F8',
        navy: '#192655',
        lightnavy: '#3876BF',
        lightgray: '#9CA3AF',
        orange: '#E1AA74',
        purple: '#6D28D9',
        green: '#10B981',
        red: '#EF4444'
      }
    },
  },
  plugins: [],
}
