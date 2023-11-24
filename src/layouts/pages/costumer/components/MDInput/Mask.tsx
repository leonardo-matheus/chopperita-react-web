import * as React from "react";
import { IMaskInput } from "react-imask";
import { NumericFormat, NumericFormatProps } from "react-number-format";
import Stack from "@mui/material/Stack";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import MDBoxRoot from "components/MDBox/MDBoxRoot";
import MDBox from "components/MDBox";
import MDInputRoot from "components/MDInput";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = React.forwardRef<HTMLInputElement, CustomProps>(function TextMaskCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="000.000.000-00"
      definitions={{
        "": /[0-9]/, // Alteração para permitir qualquer número de 0 a 9
      }}
      inputRef={ref}
      onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

const NumericFormatCustom = React.forwardRef<NumericFormatProps, CustomProps>(
  function NumericFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        valueIsNumericString
        prefix="$"
      />
    );
  }
);

interface MaskProps {
  onEnterPress: () => void;
  value: string; // Adicione uma propriedade de valor
  onChange: (value: string) => void;
}

export default function FormattedInputs({ onEnterPress, value, onChange }: MaskProps) {
  const [values, setValues] = React.useState({
    textmask: null,
    numberformat: "1320",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });

    if (name === "textmask") {
      onChange(value);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onEnterPress();
    }
  };

  return (
    <MDBox>
      <Stack direction="row" spacing={2}>
        <FormControl variant="standard">
          <InputLabel htmlFor="formatted-text-mask-input">Buscar por CPF</InputLabel>
          <Input
            value={value} // Use o valor da propriedade value
            onChange={(e) => onChange(e.target.value)} // Use a propriedade onChange
            onKeyPress={handleKeyPress}
            name="textmask"
            id="formatted-text-mask-input"
            inputComponent={TextMaskCustom as any}
          />
        </FormControl>
      </Stack>
    </MDBox>
  );
}
