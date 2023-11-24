// Dev: https://github.com/leonardo-matheus
// Material Dashboard 2 PRO React TS Base Styles
import borders from "assets/theme/base/borders";

const { borderRadius } = borders;

// types
type Types = any;

const avatar: Types = {
  styleOverrides: {
    root: {
      transition: "all 200ms ease-in-out",
    },

    rounded: {
      borderRadius: borderRadius.lg,
    },

    img: {
      height: "",
    },
  },
};

export default avatar;
