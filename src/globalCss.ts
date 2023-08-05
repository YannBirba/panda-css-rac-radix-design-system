import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
  "#root": {
    height: "100%",
    isolation: "isolate",
  },

  body: {
    backgroundColor: "#fefefe",
    color: "black",
    fontFamily: "sans-serif",
    lineHeight: "1.5",
    overflowX: "hidden",
  },

  html: {
    MozFontFeatureSettings: "'kern'",
    MozOsxFontSmoothing: "grayscale",
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "transparent",
    WebkitTextSizeAdjust: "100%",
    height: "100%",
    scrollBehavior: "smooth",
    textRendering: "optimizeLegibility",
    textSizeAdjust: "100%",
  },

  "img, picture, video, canvas, svg": {
    display: "block",
    maxWidth: "100%",
  },

  "p, h1, h2, h3, h4, h5, h6": {
    overflowWrap: "break-word",
  },
});
