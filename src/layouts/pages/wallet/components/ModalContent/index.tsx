import MDButton from "components/MDButton";

//Import Icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ReplayIcon from "@mui/icons-material/Replay";
import DeleteIcon from "@mui/icons-material/Delete";

function ModalContent() {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", flexDirection: "column" }}>
      <MDButton
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <VisibilityIcon sx={{ marginRight: 1 }} />
        Ver detalhes
      </MDButton>
      <MDButton
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <EditIcon sx={{ marginRight: 1 }} />
        Editar
      </MDButton>
      <MDButton
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <AttachMoneyIcon sx={{ marginRight: 1 }} />
        Adicionar saldo
      </MDButton>
      <MDButton
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <MonetizationOnIcon sx={{ marginRight: 1 }} />
        Retirar saldo
      </MDButton>
      <MDButton
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <ReplayIcon sx={{ marginRight: 1 }} />
        Sincronizar
      </MDButton>
      <MDButton
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <DeleteIcon sx={{ marginRight: 1 }} />
        Excluir
      </MDButton>
    </div>
  );
}

export default ModalContent;
