// Dev: https://github.com/leonardo-matheus
// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

function FullBody(): JSX.Element {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} mb={2} px={3}>
        <MDTypography variant="body2" color="text">
          جسم كامل
        </MDTypography>
        <MDBadge variant="contained" color="info" badgeContent="معتدل" container />
      </MDBox>
      <MDBox pb={3} px={3}>
        <MDTypography variant="body2" color="text">
          ما يهم هو الأشخاص الذين أوقدوه. والناس الذين يشبهونهم مستاءون منه.
        </MDTypography>
      </MDBox>
    </Card>
  );
}

export default FullBody;
