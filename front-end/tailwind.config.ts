import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          50: '#eff6ff',
          100: '#dbeafe',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#0f1b4d',
        },
        'indigo': {
          300: '#a4b5fd',
          500: '#6366f1',
        },
        'pink': {
          300: '#fbcfe8',
          500: '#ec4899',
        },
        'green': {
          300: '#bbf7d0',
          600: '#22c55e',
        },
        'orange': {
          500: '#f97316',
        },
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
