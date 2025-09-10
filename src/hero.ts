import { heroui } from "@heroui/theme";

export default heroui({
  defaultTheme: "dark",
  defaultExtendTheme: "dark",
  layout: {
    disabledOpacity: "0.3",
  },
  themes: {
    light: {
      colors: {
        primary: {
          DEFAULT: "#FF6B6B",
          foreground: "#FFFFFF",
        },
      },
    },
    dark: {
      colors: {
        primary: {
          DEFAULT: "#17C964",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#7828C8",
          foreground: "#FFFFFF",
        },
      },
    },
  },
});
