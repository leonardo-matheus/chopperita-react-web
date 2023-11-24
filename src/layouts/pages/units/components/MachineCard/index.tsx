import React, { useState, useEffect } from "react";
import MDAvatar from "components/MDAvatar";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import FaucetIcon from "assets/images/icons/faucet/faucet";

interface FaucetItem {
  barrel: {
    beer_id: number;
    created_at: string;
    current_litters: number;
    id: number;
    label: string;
    machine_id: number;
    manufacturer_code: string;
    size: string;
    status: "full" | "empty";
    updated_at: string;
  };
  beer: {
    abu_bitterness: string;
    abv_alcohol_content: string;
    beer_name: string;
    beer_url: string;
    coloring: string;
    created_at: string;
    description: string;
    id: number;
    label: string;
    price_liters: number;
    unit_id: number;
    updated_at: string;
    web_id: null | any;
  };
  conjunct: number;
  id: number;
  ip: string;
  label: string;
  machine_id: number;
  tap_barrel_id: number;
}

type MachineCardProps = {
  onVisualizarClick: (machineId: number) => Promise<void>;
  machineId: number;
};

const MachineCard: React.FC<MachineCardProps> = ({ machineId, onVisualizarClick }) => {
  const [faucetsNumber, setFaucetsNumber] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [tapData, setTapData] = useState<FaucetItem[]>([]);

  useEffect(() => {
    const fetchMachineData = async () => {
      try {
        const token = "55412e9a5ac33cd1a55322e83b5918374cc92db5";
        const options = {
          method: "GET",
          headers: { Authorization: `Token ${token}` },
        };

        const response = await fetch(
          `http://192.168.88.100:5000/api/message/machine_info`,
          options
        );
        const responseData = (await response.json()) as { data: { taps: FaucetItem[] } };

        if (responseData.data && responseData.data.taps) {
          const fullFaucets = responseData.data.taps.filter((tap) => {
            return tap.barrel.status === "full";
          });

          setFaucetsNumber(fullFaucets.length);
          setTapData(responseData.data.taps);
          setLoading(false);
        }
      } catch (error) {
        console.error("Erro ao buscar dados da máquina", error);
        setLoading(false);
      }
    };

    fetchMachineData();
  }, []);

  return (
    <MDBox
      variant="contained"
      width={194}
      height={283}
      borderRadius="12px"
      border={"2px solid #C7CCD0"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={1}
    >
      <MDBox borderRadius="12px" p={1}>
        <MDAvatar
          sx={{
            background:
              "transparent linear-gradient(180deg, #2E8271 0%, #165548 100%) 0% 0% no-repeat padding-box",
            mixBlendMode: "normal",
            opacity: 1,
          }}
          alt="Avatar"
          size="lg"
          variant="rounded"
          borderRadius="50px"
          paddingTop={0}
        >
          <FaucetIcon />
        </MDAvatar>
      </MDBox>
      <MDBox
        paddingLeft={0}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <MDTypography variant="h5" fontWeight="medium">
          Máquina {machineId}
        </MDTypography>
        <MDTypography display={"flex"} mt={0.5} variant="button" color="text">
          Unidade 01
        </MDTypography>
      </MDBox>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "transparent",
        }}
      >
        <Divider variant="middle" sx={{ backgroundColor: "#333" }} />
        <MDBox
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"row"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <MDTypography variant="button" color="text">
            Torneiras operando: &nbsp;
          </MDTypography>
          <MDTypography variant="h5" fontWeight="medium">
            {faucetsNumber}
          </MDTypography>
        </MDBox>
        <Divider variant="middle" sx={{ backgroundColor: "#333" }} />
      </List>
      <MDBox mb={2}>
        <MDButton
          display="flex"
          variant="gradient"
          color="info"
          onClick={() => onVisualizarClick(machineId)}
        >
          Visualizar
        </MDButton>
      </MDBox>
    </MDBox>
  );
};

export default MachineCard;
