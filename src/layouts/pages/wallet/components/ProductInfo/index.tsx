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
import { S } from "@fullcalendar/core/internal-common";
import MDAvatar from "components/MDAvatar";

interface WalletProps {
  FormDataWallet: FormDataWallet;
  setFormDataWallet: React.Dispatch<React.SetStateAction<FormDataWallet>>;
  onUpdateFormDataW: (data: FormDataWallet) => void;
}

const states = Object.keys(citiesData);

interface FormDataWallet {
  customer_id: string;
  client_code: string;
  cash_balance: number;
  category: string;
  permission: string;
}

const applyCPFMask = (value: string): string => {
  const cleanedValue = value.replace(/[^\d]/g, "").slice(0, 11);
  return cleanedValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};
const ProductInfo: React.FC<WalletProps> = ({
  FormDataWallet,
  setFormDataWallet,
  onUpdateFormDataW,
}) => {
  const [selectedState, setSelectedState] = useState<{
    abbreviation: string;
    label: string;
  } | null>(null);

  type ChangeEvent = {
    target: {
      name?: string;
      value: unknown;
    };
  };

  const handleChange = (event: ChangeEvent) => {
    const { name, value } = event.target;
    let cleanedValue = value as string;
  };

  return (
    <MDBox display={"flex"} justifyContent={"center"} alignItems={"center"} m={0}>
      <Grid mt={"1em"} p={"0.5rem"} container spacing={2}>
        <Grid item xs={12} ml={"3vw"} sm={6} md={4.5}>
          <MDAvatar></MDAvatar>
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
                  name="customer_id"
                  label="Nome Completo"
                  defaultValue={FormDataWallet.customer_id}
                  onChange={handleChange}
                  size="large"
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <FormField
                  required
                  type="text"
                  name="client_code"
                  label="CPF"
                  value={FormDataWallet.category}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </MDBox>
          <MDBox mt={1}>
            <MDBox mt={1}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                  <FormField required type="date" label="Cliente" defaultValue="" name="birthday" />
                </Grid>
                <Grid item xs={16} sm={4}>
                  <FormField
                    type="text"
                    name="profession"
                    label="permissão"
                    defaultValue={FormDataWallet.permission}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={16} sm={4}>
                  <FormField
                    type="text"
                    name="office"
                    label="saldo"
                    defaultValue={FormDataWallet.cash_balance}
                    onChange={handleChange}
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
