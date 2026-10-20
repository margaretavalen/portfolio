/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#050816',
        darkBg2: '#0A0F1E',
        surface: '#0F172A',
        surface2: '#111827',
        cyanAccent: '#06B6D4',
        blueAccent: '#3B82F6',
        purpleAccent: '#8B5CF6',
        pinkAccent: '#EC4899',
        textMain: '#F1F5F9',
        mutedText: '#64748B',
        mutedText2: '#94A3B8',
        brandBorder: 'rgba(99, 102, 241, 0.15)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        cyanGlow: '0 0 20px rgba(6, 182, 212, 0.3)',
        blueGlow: '0 0 25px rgba(59, 130, 246, 0.3)',
      },
    },
  },
  plugins: [],
}

