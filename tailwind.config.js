/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#121212',
          secondary: '#1E1E1E',
          input: '#2A2A2A',
        },
        text: {
          primary: '#E0E0E0',
          secondary: '#B0B0B0',
        },
        accent: {
          primary: '#4A90E2',
        },
      },
      borderRadius: {
        small: '8px',
        medium: '16px',
        large: '24px',
      },
    },
  },
  plugins: [],
} 