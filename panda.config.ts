import { defineConfig } from "@pandacss/dev";
import { globalCss } from "src/globalCss";

export default defineConfig({
  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  globalCss,

  jsxFramework: "react",

  minify: true,

  theme: {
    extend: {},
  },

  conditions: {
    extend: {
      closed: '&:is([closed],[data-closed],[data-state="closed"])',
      groupOpen: '.group:is([open],[data-open],[data-state="open"]) &',
      groupClosed: '.group:is([closed],[data-closed],[data-state="closed"]) &',
      peerOpen: '.peer:is([open],[data-open],[data-state="open"]) ~ &',
      peerClosed: '.peer:is([closed],[data-closed],[data-state="closed"]) ~ &',
    },
  },
});
