import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: { red: '#cc2222', dark: '#1a1a1a', charcoal: '#2d2d2d', grey: '#4a4a4a', light: '#f5f5f5' },
      },
    },
  },
  plugins: [],
}
export default config
