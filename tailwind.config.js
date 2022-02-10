module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          100: "#E50914",
          200: "#F40612",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
