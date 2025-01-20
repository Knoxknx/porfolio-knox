/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'pearl-gray': 'rgb(243, 243, 243)',
        'charleston-green': 'rgb(35, 43, 43)',
      },
    },
  },
  plugins: [],
};
