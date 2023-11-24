import { FC, forwardRef } from "react";
import { OutlinedTextFieldProps, StandardTextFieldProps } from "@mui/material";
import MDInputRoot from "components/MDInput/MDInputRoot";
import InputMask from "react-input-mask";

interface Props extends Omit<OutlinedTextFieldProps | StandardTextFieldProps, "variant"> {
  variant?: "standard" | "outlined";
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  value: string; // Adicione a propriedade "value"
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Adicione a propriedade "onChange"
}

const MDInputCPF: FC<Props | any> = forwardRef(
  ({ error, success, disabled, value, onChange, ...rest }, ref) => (
    <MDInputRoot {...rest} ref={ref} ownerState={{ error, success, disabled }}>
      <InputMask mask="999.999.999-99" maskChar="_" alwaysShowMask>
        {() => <input type="text" placeholder="CPF" value={value} onChange={onChange} />}
      </InputMask>
    </MDInputRoot>
  )
);

MDInputCPF.defaultProps = {
  error: false,
  success: false,
  disabled: false,
};

export default MDInputCPF;
