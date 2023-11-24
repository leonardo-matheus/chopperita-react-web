// Dev: https://github.com/leonardo-matheus
// Material Dashboard 2 PRO React TS Base Styles
import colors from "assets/theme-dark/base/colors";

const { text } = colors;

// types
type Types = any;

const formLabel: Types = {
  styleOverrides: {
    root: {
      color: text.main,
    },
  },
};

export default formLabel;
