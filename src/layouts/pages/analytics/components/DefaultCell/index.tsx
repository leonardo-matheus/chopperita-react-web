// Dev: https://github.com/leonardo-matheus
import { ReactNode } from "react";

// Material Dashboard 2 PRO React TS components
import MDTypography from "components/MDTypography";

function DefaultCell({ children }: { children: ReactNode }): JSX.Element {
  return (
    <MDTypography variant="button" fontWeight="regular" color="text">
      {children}
    </MDTypography>
  );
}

export default DefaultCell;
