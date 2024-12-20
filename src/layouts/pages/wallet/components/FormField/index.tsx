// Material Dashboard 2 PRO React TS components
import MDInput from "components/MDInput";
import MDBox from "components/MDBox";

// Declaring props types for FormField
interface Props {
  label: string;
  [key: string]: any;
}

function FormField({ label, ...rest }: Props): JSX.Element {
  return (
    <MDBox mb={2}>
      <MDInput {...rest} variant="outlined" label={label} fullWidth />
    </MDBox>
  );
}

export default FormField;
