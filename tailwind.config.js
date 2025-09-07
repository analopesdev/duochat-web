import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    heroui({
      layout: {
        disabledOpacity: "0.3",
        radius: {
          small: "2px",
          medium: "4px",
          large: "6px",
        },
        borderWidth: {
          small: "1px",
          medium: "1px",
          large: "2px",
        },
      },
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#FF6B6B", // Sua cor primary personalizada
              foreground: "#FFFFFF",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#FF6B6B", // Sua cor primary personalizada
              foreground: "#FFFFFF",
            },
          },
        },
      },
    }),
  ],
};
