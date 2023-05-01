/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,cjs,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      lightgray: {
        50: "#FFFFFF",
        100: "#F9F9F9",
        200: "#F3F3F3",
        300: "#E5E5E5",
        400: "#C1C1C1",
        500: "#A3A3A3",
        600: "#797979",
        700: "#666666",
        800: "#474747",
        900: "#262626",
      },
      darkgray: {
        50: "#ABABAB",
        100: "#A6A6A6",
        200: "#A0A0A0",
        300: "#939393",
        400: "#727272",
        500: "#575757",
        600: "#323232",
        700: "#222222",
        800: "#000000",
        900: "#000000",
      },
      blue: {
        50: "#D1EAFF",
        100: "#AFD3EA",
        200: "#91B7D2",
        300: "#709DBC",
        400: "#598BAC",
        500: "#3D779A",
        600: "#2E6888",
        700: "#1E5471",
        800: "#0D415B",
        900: "#002D43",
      },
      sliver: {
        50: "#E8F4FC",
        100: "#E3EEF6",
        200: "#DDE9F0",
        300: "#CFDAE2",
        400: "#ABB6BE",
        500: "#8E99A0",
        600: "#657077",
        700: "#525C63",
        800: "#343E44",
        900: "#151E23",
      },
      red: {
        50: "#FFF1F3",
        100: "#FFD3D6",
        200: "#F69F9A",
        300: "#EB7A73",
        400: "#F75D4D",
        500: "#F94F31",
        600: "#EA4531",
        700: "#D8392B",
        800: "#CB3424",
        900: "#BC2B16",
        a100: "#FF9280",
        a200: "#FF5B4E",
        a400: "#FF2D40",
        a700: "#DA2200",
      },
      orange: {
        50: "#F7F3EE",
        100: "#F8E3C2",
        200: "#F7CF90",
        300: "#F5BA5C",
        400: "#F5AA39",
        500: "#F69D22",
        600: "#F2921F",
        700: "#EC831B",
        800: "#E57418",
        900: "#DD5C13",
        a100: "#F7D38E",
        a200: "#F4AE4F",
        a400: "#F5951E",
        a700: "#F47413",
      },
    },
    fontfamily: {},
    extend: {},
  },
  plugins: [],
};
