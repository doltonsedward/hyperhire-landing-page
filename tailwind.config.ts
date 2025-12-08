import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #26C2B9 0%, #288BE7 100%)',
        'hero-background': "url('/assets/hero-background.png')",
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'blue-gray': {
          40: '#C1C5CF',
          80: '#343741',
          60: '#5E626F',
          90: '#24252F',
        },
      },
    },
  },
  plugins: [],
};
export default config;
