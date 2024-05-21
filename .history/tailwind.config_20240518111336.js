/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "1024px",
        md: "768px",
        sm: "400px",
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
};
