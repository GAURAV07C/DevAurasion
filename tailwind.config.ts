import type { Config } from "tailwindcss";
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
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.gradient-border': {
          border: '1px solid',
          borderImage: 'linear-gradient(139.06deg, #FF7B72 -8.3%, #FFFFFF 68.71%) 1',
          borderRadius: '5px',  // Set border-radius here
        },
      };
    
      // Add the utilities with respect to Tailwind's prefix and important options
      addUtilities(newUtilities, {
        respectPrefix: true,  // allows prefixing with Tailwind's custom prefixes
        respectImportant: false, // Optional: ensures !important is respected
      });
    }),
  ],
} satisfies Config;
