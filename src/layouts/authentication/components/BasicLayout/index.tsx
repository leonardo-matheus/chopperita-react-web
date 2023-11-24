// Dev: https://github.com/leonardo-matheus
import { ReactNode } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";

// Material Dashboard 2 PRO React TS examples components
import PageLayout from "examples/LayoutContainers/PageLayout";

// Material Dashboard 2 PRO React page layout routes

// Authentication pages components

// Declaring props types for BasicLayout
interface Props {
  bgColor: string;
  children: ReactNode;
}

function BasicLayout({ bgColor, children }: Props): JSX.Element {
  return (
    <PageLayout>
      <MDBox
        variant="contained"
        bgColor="#26806e"
        position="absolute"
        width="100%"
        minHeight="100vh"
      />
      <MDBox px={1} width="100%" height="100vh" mx="auto">
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            {children}
          </Grid>
        </Grid>
      </MDBox>
    </PageLayout>
  );
}

export default BasicLayout;
