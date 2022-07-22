module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      xxs: "360px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        default: "#1d1d1f",
        "custom-gray": {
          1: "#5c5c62",
          2: "#8b8b91",
          3: "#f5f5f9",
        },
        sea: "#4a74e8",
        sky: "#6e91f0",
      },
      margin: {
        3.5: "0.875rem",
        5.5: "1.375rem",
      },
      height: {
        640: "640px",
      },
      fontFamily: {
        noto: ["NotoSansCJKkr"],
      },
    },
  },
  plugins: [],
};
