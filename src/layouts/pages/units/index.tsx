import { useState } from "react";
import MachineCard from "./components/MachineCard";
import Torneira from "./components/Torneira";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MDBox from "components/MDBox";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Card } from "@mui/material";
import { toast } from "react-toastify";

type MachineCardProps = {
  onVisualizarClick: (machineId: number) => Promise<void>;
};

const Units: React.FC = () => {
  const [tapDetails, setTapDetails] = useState<any>([]);
  const [machineId, setMachineId] = useState<number>(1);

  const handleVisualizarClick = async () => {
    try {
      const response = await fetch(`http://192.168.88.100:5000/api/message/taps`, {
        method: "GET",
        headers: {
          Authorization: "Token 55412e9a5ac33cd1a55322e83b5918374cc92db5",
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();
      setTapDetails(responseData);
    } catch (error) {
      toast.error("Erro ao buscar detalhes das torneiras", error);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={2} pb={3} />
      <Card>
        <MDBox mb={2} p={3} display={"flex"} justifyContent={"space-between"}>
          <MachineCard onVisualizarClick={handleVisualizarClick} machineId={machineId} />
        </MDBox>
        {tapDetails.length > 0 && ( // Verificando se tapDetails contém elementos antes de renderizar
          <MDBox p={3}>
            {tapDetails.map((tap: any, index: number) => (
              <Torneira key={index} tap={tap} />
            ))}
          </MDBox>
        )}
      </Card>
    </DashboardLayout>
  );
};

export default Units;
