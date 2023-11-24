import React, { useState, ChangeEvent } from "react";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import FormField from "layouts/pages/costumer/components/FormField";
import ProductImage from "../ProductImage";
import citiesData from "./cities.json";
import MDInput from "components/MDInput";
import { createTheme, ThemeProvider } from "@mui/material/styles";

interface WalletProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onUpdateFormData: (data: FormData) => void;
}

const states = Object.keys(citiesData);

interface FormData {
  name: string;
  face_url: string;
  identifier: string;
  email: string;
  phone: string;
  profession: string;
  office: string;
  city: string;
  state: string;
  birthday: string;
  neighborhood?: string;
}

const applyCPFMask = (value: string): string => {
  const cleanedValue = value.replace(/[^\d]/g, "").slice(0, 11);
  return cleanedValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};

const applyPhoneMask = (value: string): string => {
  const cleanedValue = value.replace(/[^\d]/g, "").slice(0, 11);

  const formattedValue = cleanedValue.startsWith("55") ? cleanedValue.substring(2) : cleanedValue;

  return formattedValue.length === 11
    ? `+55(${formattedValue.slice(0, 2)})${formattedValue.slice(2, 7)}-${formattedValue.slice(7)}`
    : formattedValue;
};

const ProductInfo: React.FC<WalletProps> = ({ formData, setFormData, onUpdateFormData }) => {
  const [selectedState, setSelectedState] = useState<{
    abbreviation: string;
    label: string;
  } | null>(null);

  const [identifier, setIdentifier] = useState<string>(applyCPFMask(formData.identifier));
  const [phone, setPhone] = useState<string>(applyPhoneMask(formData.phone));

  type ChangeEvent = {
    target: {
      name?: string;
      value: unknown;
    };
  };

  const handleChange = (event: ChangeEvent) => {
    const { name, value } = event.target;
    let cleanedValue = value as string;

    if (name === "identifier") {
      cleanedValue = cleanedValue.replace(/[^\d]/g, "");
      setIdentifier(applyCPFMask(cleanedValue));
    }

    if (name === "phone") {
      cleanedValue = cleanedValue.replace(/[^\d]/g, "");
      setPhone(applyPhoneMask(cleanedValue));
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: cleanedValue,
    }));
  };

  const handleImageCapture = (imageSrc: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      face_url: imageSrc,
    }));

    onUpdateFormData({ ...formData, face_url: imageSrc });
  };

  const handleCityChange = (_: React.ChangeEvent<{}>, newValue: string | null) => {
    if (newValue) {
      handleChange({
        target: {
          name: "city",
          value: newValue,
        } as HTMLInputElement,
      });
    }
  };

  return (
    <MDBox display={"flex"} justifyContent={"center"} alignItems={"center"} m={0}>
      <Grid mt={"1em"} p={"0.5rem"} container spacing={2}>
        <Grid item xs={12} ml={"3vw"} sm={6} md={4.5}>
          <ProductImage onImageCapture={handleImageCapture} />
        </Grid>
        <Grid item xs={12} sm={6} md={7}>
          <MDBox m={0}>
            <MDBox mt={2} />
            <MDTypography variant="h4">Cadastro de Cliente</MDTypography>
            <MDBox mt={3} />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={7}>
                <FormField
                  required
                  type="text"
                  name="name"
                  label="Nome Completo"
                  defaultValue={formData.name}
                  onChange={handleChange}
                  size="large"
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <FormField
                  required
                  type="text"
                  name="identifier"
                  label="CPF"
                  value={identifier}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </MDBox>
          <MDBox mt={1}>
            <MDBox mt={1}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                  <FormField
                    required
                    type="date"
                    label="Data de nascimento"
                    defaultValue=""
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="birthday"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={16} sm={4}>
                  <FormField
                    type="text"
                    name="profession"
                    label="Profissão"
                    defaultValue={formData.profession}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={16} sm={4}>
                  <FormField
                    type="text"
                    name="office"
                    label="Cargo"
                    defaultValue={formData.office}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </MDBox>
            <MDTypography component="label" variant="" fontWeight="regular" color="text">
              Contato&nbsp;&nbsp;
            </MDTypography>
            <MDBox mt={1}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={7}>
                  <FormField
                    required
                    type="email"
                    name="email"
                    label="Email"
                    defaultValue={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={5}>
                  <FormField
                    required
                    type="text"
                    name="phone"
                    label="Telefone"
                    value={phone}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </MDBox>
            <MDTypography component="label" variant="" fontWeight="regular" color="text">
              Endereço&nbsp;&nbsp;
            </MDTypography>
            <MDBox mt={1}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={2.5}>
                  <Autocomplete
                    id="state-select"
                    options={states.sort().map((state) => ({ abbreviation: state, label: state }))}
                    getOptionLabel={(option) => option.label}
                    value={selectedState}
                    sx={{ padding: "" }} // Adicionado para definir o tamanho do input
                    onChange={(_, newValue) => {
                      setSelectedState(newValue);
                    }}
                    renderInput={(params) => (
                      <MDInput
                        {...params}
                        label="Estado"
                        size="large"
                        fullWidth
                        variant="outlined"
                        sx={{ height: "0.5rem !important" }} // Adicionado para definir o tamanho do input
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={5.5}>
                  <Autocomplete
                    id="city-select"
                    options={
                      (
                        citiesData[selectedState?.abbreviation as keyof typeof citiesData] || []
                      ).sort() as string[]
                    }
                    getOptionLabel={(option) => option}
                    value={formData.city || ""}
                    sx={{ height: "0.5rem !important", padding: "0 !important" }}
                    onChange={handleCityChange}
                    renderInput={(params) => (
                      <MDInput
                        {...params}
                        label="Cidade"
                        fullWidth
                        size="medium"
                        variant="outlined"
                        padding={"0 !important"}
                        style={{ height: 2 }} // Adicionado para ajustar a altura
                        sx={{ height: 0.5, padding: 0 }} // Adicionado para definir o tamanho do input
                        input
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormField
                    type="text"
                    name="neighborhood"
                    label="Bairro"
                    defaultValue={formData.neighborhood}
                    onChange={handleChange}
                    size="large"
                  />
                </Grid>
              </Grid>
            </MDBox>
          </MDBox>
        </Grid>
      </Grid>
    </MDBox>
  );
};

export default ProductInfo;
