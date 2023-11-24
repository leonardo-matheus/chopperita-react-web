// Dev: https://github.com/leonardo-matheus
// Material Dashboard 2 PRO React TS Base Styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

const { grey } = colors;
const { size } = typography;

// types
type Types = any;

const breadcrumbs: Types = {
  styleOverrides: {
    li: {
      lineHeight: 0,
    },
  },
};

export default breadcrumbs;