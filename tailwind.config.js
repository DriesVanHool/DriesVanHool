import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    prefix: "nextui", // prefix for themes variables
    addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
    defaultTheme: "light", // default theme from the themes object
    defaultExtendTheme: "light", // default theme to extend on custom themes
    layout: {
      spacingUnit: 4, // in px
      disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
      dividerWeight: "1px", // h-divider the default height applied to the divider component
      fontSize: {
        tiny: "0.75rem", // text-tiny
        small: "0.875rem", // text-small
        medium: "1rem", // text-medium
        large: "1.125rem", // text-large
      },
      lineHeight: {
        tiny: "1rem", // text-tiny
        small: "1.25rem", // text-small
        medium: "1.5rem", // text-medium
        large: "1.75rem", // text-large
      },
      radius: {
        small: "8px", // rounded-small
        medium: "12px", // rounded-medium
        large: "14px", // rounded-large
      },
      borderWidth: {
        small: "1px", // border-small
        medium: "2px", // border-medium (default)
        large: "3px", // border-large
      },
    }, // common layout tokens (applied to all themes)
    themes: {
      light: {
        layout: {
          hoverOpacity: 0.8, //  this value is applied as opacity-[value] when the component is hovered
          boxShadow: {
            // shadow-small
            small:
                "0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
            // shadow-medium
            medium:
                "0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
            // shadow-large
            large:
                "0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
          },
        },
      },
      dark: {
        layout: {
          hoverOpacity: 0.9, //  this value is applied as opacity-[value] when the component is hovered
          boxShadow: {
            // shadow-small
            small:
                "0px 0px 5px 0px rgb(0 0 0 / 0.05), 0px 2px 10px 0px rgb(0 0 0 / 0.2), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
            // shadow-medium
            medium:
                "0px 0px 15px 0px rgb(0 0 0 / 0.06), 0px 2px 30px 0px rgb(0 0 0 / 0.22), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
            // shadow-large
            large:
                "0px 0px 30px 0px rgb(0 0 0 / 0.07), 0px 30px 60px 0px rgb(0 0 0 / 0.26), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
          },
        },
      },
      "blue-dark": {
        extend: "dark",
        colors: {
          background: "#080B1E",
          foreground: "#ffffff",
          primary: {
            50: "#152A4A",
            100: "#1E3E67",
            200: "#2B547F",
            300: "#376E9A",
            400: "#4C8BB7",
            500: "#6FA8D4",
            600: "#93C5F0",
            700: "#B8E2FD",
            800: "#DCEFFF",
            900: "#F1F8FF",
            DEFAULT: "#6FA8D4",
            foreground: "#ffffff",
          },
          secondary: {
            50: "#3C3249",
            100: "#574F71",
            200: "#726A98",
            300: "#8E85C0",
            400: "#A9A0E8",
            500: "#C4B8FF",
            600: "#D2C6FF",
            700: "#E1D5FF",
            800: "#F0E3FF",
            900: "#F8F5FF",
            DEFAULT: "#C4B8FF",
            foreground: "#ffffff",
          },
          focus: "#93C5F0",
        },
        layout: {
          disabledOpacity: "0.3",
          radius: {
            small: "4px",
            medium: "6px",
            large: "8px",
          },
          borderWidth: {
            small: "1px",
            medium: "2px",
            large: "3px",
          },
        },
      },
      "blue-light": {
        extend: "light",
        colors: {
          background: "#F4F6F8",
          foreground: "#333333",
          primary: {
            50: "#C4D3E3",
            100: "#A9BED4",
            200: "#8FA9C6",
            300: "#7593B7",
            400: "#5A7FA8",
            500: "#3F6A9A",
            600: "#2C4F7D",
            700: "#1A345F",
            800: "#071944",
            900: "#01031E",
            DEFAULT: "#3F6A9A",
            foreground: "#333333",
          },
          focus: "#2C4F7D",
        },
        secondary: {
          50: "#C3C7D6",
          100: "#ABB4C8",
          200: "#94A0BA",
          300: "#7D8DAC",
          400: "#66799E",
          500: "#4F6590",
          600: "#3E527A",
          700: "#2C3F64",
          800: "#1B2C4E",
          900: "#0D1638",
          DEFAULT: "#4F6590",
          foreground: "#333333",
        },
        layout: {
          disabledOpacity: "0.3",
          radius: {
            small: "4px",
            medium: "6px",
            large: "8px",
          },
          borderWidth: {
            small: "1px",
            medium: "2px",
            large: "3px",
          },
        },
      },
      "purple-dark": {
        extend: "dark", // <- inherit default values from dark theme
        colors: {
          background: "#0D001A",
          foreground: "#ffffff",
          primary: {
            50: "#3B096C",
            100: "#520F83",
            200: "#7318A2",
            300: "#9823C2",
            400: "#c031e2",
            500: "#DD62ED",
            600: "#F182F6",
            700: "#FCADF9",
            800: "#FDD5F9",
            900: "#FEECFE",
            DEFAULT: "#DD62ED",
            foreground: "#ffffff",
          },
          focus: "#F182F6",
        },
        layout: {
          disabledOpacity: "0.3",
          radius: {
            small: "4px",
            medium: "6px",
            large: "8px",
          },
          borderWidth: {
            small: "1px",
            medium: "2px",
            large: "3px",
          },
        },
      },
      "green-dark": {
        extend: "dark",
        colors: {
          background: "#0D180A",
          foreground: "#ffffff",
          primary: {
            50: "#214F2E",
            100: "#2F693F",
            200: "#3E8150",
            300: "#4D9962",
            400: "#5DB274",
            500: "#6BC286",
            600: "#7ADA97",
            700: "#A1E9B8",
            800: "#C8F8D9",
            900: "#E3FAED",
            DEFAULT: "#6BC286",
            foreground: "#ffffff",
          },
          secondary: {
            50: "#2D3D29",
            100: "#41523C",
            200: "#546651",
            300: "#677C65",
            400: "#7A917A",
            500: "#8EAA8E",
            600: "#A1C0A2",
            700: "#B5D7B6",
            800: "#C8EDCA",
            900: "#DBF4DD",
            DEFAULT: "#8EAA8E",
            foreground: "#ffffff",
          },
          focus: "#7ADA97",
        },
        layout: {
          disabledOpacity: "0.3",
          radius: {
            small: "4px",
            medium: "6px",
            large: "8px",
          },
          borderWidth: {
            small: "1px",
            medium: "2px",
            large: "3px",
          },
        },
      },
      "green-light":{
        extend: "light",
        colors: {
          background: "#F2F7F0", // Lighter background
          foreground: "#333333",
          primary: {
            50: "#98C4A1",
            100: "#8EBB98",
            200: "#84B290",
            300: "#7AA987",
            400: "#70A07E",
            500: "#669775",
            600: "#5C8F6D",
            700: "#528664",
            800: "#487D5B",
            900: "#3E7452",
            DEFAULT: "#669775",
            foreground: "#333333",
          },
          secondary: {
            50: "#A9BAA6",
            100: "#B1C1AD",
            200: "#B9C8B5",
            300: "#C2D0BD",
            400: "#CAD7C5",
            500: "#D2DECC",
            600: "#DBE6D4",
            700: "#E3EDDC",
            800: "#ECF5E4",
            900: "#F4FCED",
            DEFAULT: "#D2DECC",
            foreground: "#333333",
          },
          focus: "#5C8F6D",
        },
        layout: {
          disabledOpacity: "0.3",
          radius: {
            small: "4px",
            medium: "6px",
            large: "8px",
          },
          borderWidth: {
            small: "1px",
            medium: "2px",
            large: "3px",
          },
        },
      },
      "blue-yellow-dark":{
        extend: "dark",
        colors: {
          background: "#0D1013", // Dark teal background
          foreground: "#FFFAF0", // Light foreground for contrast
          primary: {
            50: "#FFFF80",   // Light yellow shades for primary text
            100: "#FFFF66",
            200: "#FFFF4D",
            300: "#FFFF33",
            400: "#FFFF1A",
            500: "#FFFF00",   // Main yellow text color
            600: "#E5E500",
            700: "#CCCC00",
            800: "#B2B200",
            900: "#999900",
            DEFAULT: "#FFFF00",  // Default main yellow text color
            foreground: "#FFFAF0",
          },
          secondary: {
            50: "#80A3FF",   // Light blue shades for secondary
            100: "#668FFF",
            200: "#4D7AFF",
            300: "#3366FF",
            400: "#1A52FF",
            500: "#003EFF",  // Main teal background color
            600: "#0036E5",
            700: "#002CCE",
            800: "#0022B7",
            900: "#001AA1",
            DEFAULT: "#003EFF",  // Default main teal background color
            foreground: "#FFFAF0",
          },
          focus: "#FFFF1A", // Light yellow focus color
        },
        layout: {
          disabledOpacity: "0.3",
          radius: {
            small: "4px",
            medium: "6px",
            large: "8px",
          },
          borderWidth: {
            small: "1px",
            medium: "2px",
            large: "3px",
          },
        },
      },
      "blue-yellow-light":  {
        extend: "light",
        colors: {
          background: "#FFF7E5", // Light yellow background
          foreground: "#1A1A1A", // Dark foreground for contrast
          primary: {
            50: "#81B3FF",   // Light blue shades for primary text
            100: "#669CFF",
            200: "#4D85FF",
            300: "#336EFF",
            400: "#1A57FF",
            500: "#0040FF",   // Main blue text color
            600: "#0036E5",
            700: "#002CCE",
            800: "#0022B7",
            900: "#001AA1",
            DEFAULT: "#0040FF",  // Default main blue text color
            foreground: "#1A1A1A",
          },
          secondary: {
            50: "#FFECD9",   // Light yellow shades for secondary
            100: "#FFDFB3",
            200: "#FFD38D",
            300: "#FFC666",
            400: "#FFBA40",
            500: "#FFAE1A",  // Main yellow background color
            600: "#E59C00",
            700: "#CC8A00",
            800: "#B27900",
            900: "#996700",
            DEFAULT: "#FFAE1A",  // Default main yellow background color
            foreground: "#1A1A1A",
          },
          focus: "#1A57FF", // Light blue focus color
        },
        layout: {
          disabledOpacity: "0.3",
          radius: {
            small: "4px",
            medium: "6px",
            large: "8px",
          },
          borderWidth: {
            small: "1px",
            medium: "2px",
            large: "3px",
          },
        },
      },
      // ... custom themes
    },
  })]
}

