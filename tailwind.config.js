/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,mdx}',
    './src/components/**/*.{js,jsx,mdx}',
    './src/app/**/*.{js,jsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        surface: '#0a0d14',
        panel: '#111827'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(99, 102, 241, 0.35), 0 10px 35px rgba(79, 70, 229, 0.25)'
      },
      backgroundImage: {
        noise:
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)'
      }
    }
  },
  plugins: []
};
