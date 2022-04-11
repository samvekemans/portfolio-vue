module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/banner.png')",
        mainbg: "url('/mainbg.png')",
      },
      spacing: {
        always: "0em 4%",
        carousel: "500px",
      },
      colors: {
        bluebg: "#006B88",
        border: "#00000061",
        pink: "#D97386",
        grey: "#f1f1f1",
      },
    },
    screens: {},
    fontFamily: {
      write: ["Indie Flower", "cursive"],
    },
    screens: {
      700: { max: "700px" },
      1200: { max: "1200px" },
      1000: { max: "1000px" },
    },
  },
};
