/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        MainBlue: "#162A41",
        Button: "#162A41",
      },
      maxWidth: {
        1080: "1080px",
      },
    },
  },
  plugins: [],
};
