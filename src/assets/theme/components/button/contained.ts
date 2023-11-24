// Dev: https://github.com/leonardo-matheus
// Material Dashboard 2 PRO React TS Base Styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

// Material Dashboard 2 PRO React TS Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";

const { white, text, info, secondary } = colors;
const { size } = typography;

const contained = {
  base: {
    backgroundColor: info,
    minHeight: pxToRem(40),
    color: text.secondary,
    borderColor: text.info,
    padding: `${pxToRem(10)} ${pxToRem(24)}`,

    "&:hover": {
      backgroundColor: white.main,
    },

    "&:active, &:active:focus, &:active:hover": {
      opacity: 0.85,
    },

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  small: {
    minHeight: pxToRem(32),
    padding: `${pxToRem(6)} ${pxToRem(16)}`,
    fontSize: size.xs,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(12)} !important`,
    },
  },

  large: {
    minHeight: pxToRem(47),
    padding: `${pxToRem(12)} ${pxToRem(28)}`,
    fontSize: size.sm,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(22)} !important`,
    },
  },

  primary: {
    backgroundColor: info.button,

    "&:hover": {
      backgroundColor: info.button,
    },

    "&:focus:not(:hover)": {
      backgroundColor: info.button,
    },
  },

  secondary: {
    backgroundColor: secondary.main,

    "&:hover": {
      backgroundColor: secondary.main,
    },

    "&:focus:not(:hover)": {
      backgroundColor: secondary.focus,
    },
  },
};

export default contained;
