module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'coffee': "linear-gradient(rgba(33, 35, 36, 0.9), rgba(133, 35, 36, 0.9)), url('/src/assets/images/Coffee.jpeg')"
      },
      colors: {
        "black": "#12151E",
        "hot-pink": "#fd2d78",
        "gray-900": "#18191a",
        "gray-800": "#212324",
        "gray-700": "#2F3133",
        "gray-600": "#404345",
        "gray-500": "#55585A",
        "gray-400": "#797B7C",
        "gray-300": "#A7A8A8",
        "gray-200": "#D3D4D4",
        "gray-100": "#ECECEC",
        "gray-50": "#F4F4F4",
      },
    },
  },
  plugins: [],
}
