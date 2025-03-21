import { defineConfig, defineGlobalStyles, definePreset } from "@pandacss/dev";
import pandaPreset from '@pandacss/preset-panda'
import { createPreset } from '@park-ui/panda-preset'
import blue from '@park-ui/panda-preset/colors/blue'
import sand from '@park-ui/panda-preset/colors/sand'

const globalCss = defineGlobalStyles({
  'html, body': {
    fontSize: '24px',
    color: 'rgb(116, 101, 80)'
  },
  'body': {
    bg: '#f0f5f4',
    minW: '100vw',
    minH: '100vh',
    h: 0,
    overflowX: 'hidden',
  }
})

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: [pandaPreset, createPreset({ accentColor: blue, grayColor: sand, radius: 'sm' })],

  // Where to look for your css declarations
  include: ["./src/app/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  globalCss,

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",

  jsxFramework: 'react'
});
