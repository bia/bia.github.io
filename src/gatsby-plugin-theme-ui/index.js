import { merge } from "theme-ui"
import { tailwind } from "@theme-ui/presets"

export default merge(tailwind, {
  initialColorModeName: `dark`,
  config: {
    useCustomProperties: true,
  },
  colors: {
    primary: tailwind.colors.orange[7],
    secondary: tailwind.colors.indigo[6],
    toggleIcon: tailwind.colors.black,
    modes: {
      dark: {
        text: tailwind.colors.white,
        primary: tailwind.colors.orange[7],
        background: tailwind.colors.gray[9],
        textMuted: tailwind.colors.gray[5],
        toggleIcon: tailwind.colors.white,
      },
    },
  },
  layout: {
    footer: {
      display: `block`,
      color: `text`,
      pt: 6,
      pb: 6,
    },
    header: {
      px: [3, 4],
      py: [2, 3],
      fontSize: 2,
      display: `flex`,
      alignItems: `center`,
      flexWrap: `wrap`,
    },
    main: {
      position: `relative`,
    },
    container: {
      maxWidth: `5xl`,
      padding: 4,
    },
  },
  styles: {
    root: {
      color: `text`,
      backgroundColor: `background`,
      margin: 0,
      padding: 0,
      boxSizing: `border-box`,
      textRendering: `optimizeLegibility`,
      WebkitFontSmoothing: `antialiased`,
      MozOsxFontSmoothing: `grayscale`,
    },
    p: {
      fontSize: [1, 2],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
    },
    h1: {
      fontSize: [5, 6],
      fontWeight: 200,
      letterSpacing: 0,
      mt: 2,
    },
    h2: {
      fontSize: [4, 5],
      mt: 2,
    },
    h3: {
      fontSize: [3, 4],
      mt: 3,
    },
    h4: {
      fontSize: [2, 3],
    },
    h5: {
      fontSize: [1, 2],
    },
    h6: {
      fontSize: 1,
      mb: 2,
    },
  },
  buttons: {
    toggle: {
      color: `background`,
      border: `none`,
      backgroundColor: `text`,
      cursor: `pointer`,
      alignSelf: `center`,
      px: 3,
      py: 2,
      ml: 3,
    },
  },
})
