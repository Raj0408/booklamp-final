/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#111111',
        'text-primary': '#f0f0f0',
        'text-secondary': '#a0a0a0',
        'accent': '#d4af37',
        'accent-hover': '#e6c35c',
        'border-color': '#2a2a2a',
      },
    },
  },
  plugins: [],
}