// Dev: https://github.com/leonardo-matheus
// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Declaring props types for ProductCell
interface Props {
  image: string;
  name: string;
  orders: string | number;
}

function ProductCell({ image, name, orders }: Props): JSX.Element {
  return (
    <MDBox display="flex" alignItems="center" pr={2}>
      <MDBox mr={2}>
        <MDAvatar src={image} alt={name} />
      </MDBox>
      <MDBox display="flex" flexDirection="column">
        <MDTypography variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="button" fontWeight="regular" color="secondary">
          <MDTypography component="span" variant="button" fontWeight="regular" color="success">
            {orders}
          </MDTypography>{" "}
          orders
        </MDTypography>
      </MDBox>
    </MDBox>
  );
}

export default ProductCell;
