import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        samarkan: ['Samarkan', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.gradient-border': {
          border: '1px solid',
          borderImage: 'linear-gradient(139.06deg, #FF7B72 -8.3%, #FFFFFF 68.71%) 1',
          borderRadius: '5px', // Configurable border-radius
        },
      };

      addUtilities(newUtilities, {
        respectPrefix: true,
        respectImportant: false,
      });
    }),
  ],
} satisfies Config;