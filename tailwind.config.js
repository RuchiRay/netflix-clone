module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          100: "#E50914",
          200: "#F40612",
        },
        gray:{
          50:"#6B7071",
          100:"#333333"
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
