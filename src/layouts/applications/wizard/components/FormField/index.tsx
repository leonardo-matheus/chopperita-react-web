// Dev: https://github.com/leonardo-matheus
// Material Dashboard 2 PRO React TS components
import MDInput from "components/MDInput";

function FormField({ label, ...rest }: { label: string; [key: string]: any }): JSX.Element {
  return <MDInput variant="standard" label={label} fullWidth {...rest} />;
}

export default FormField;
