import React, { useEffect, useState } from "react";
import DataTable from "./components/Tables/DataTable";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import CircleErrorIcon from "./data/Error";
import CircleCheckIcon from "./data/Check";
import { useAuth } from "hooks/AuthContext";
import { useNavigate } from "react-router-dom";
import dataTableData from "./data/dataTableData";
import { Modal, styled } from "@mui/material";
import MDButton from "components/MDButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ModalContent from "./components/ModalContent";
import { useMediaQuery, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Card, CardProps } from "@mui/material";

interface TableData {
  id: number;
  client_code: string;
  permission: string;
  is_sync: boolean;
  category: string;
  cash_balance: number;
  customer: {
    name: string;
    email: string;
    face_url: string;
  };
}

function Wallet() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [walletData, setWalletData] = useState<TableData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.88.100:5000/api/wallet", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setWalletData(data.data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
  }, []);

  interface ModalPosition {
    top: number;
    left: number;
  }
  interface StyledCardProps extends CardProps {
    modalPosition: ModalPosition;
  }

  const StyledCard = React.forwardRef<HTMLDivElement, StyledCardProps>((props, ref) => {
    const { modalPosition, children } = props;
    return (
      <Card
        ref={ref}
        sx={{
          position: "absolute",
          top: modalPosition.top,
          left: modalPosition.left,
          width: isMobile ? "90%" : "300px",
          padding: "20px",
          textAlign: "center",
          borderRadius: "8px",
        }}
      >
        {children}
      </Card>
    );
  });

  const [modalPosition, setModalPosition] = useState<ModalPosition>({ top: 0, left: 0 });

  // State for modal
  const [openModal, setOpenModal] = useState(false);

  // Function to open the modal
  const handleOpenModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLElement;
    const buttonRect = target.getBoundingClientRect();
    setModalPosition({
      top: buttonRect.bottom,
      left: buttonRect.left,
    });
    setOpenModal(true);
  };
  // Function to close the modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <MDBox p={3} lineHeight={1}>
          <MDTypography variant="h5" fontWeight="medium">
            Lista de carteiras
          </MDTypography>
          <MDTypography variant="button" color="text">
            Veja as carteiras dos clientes cadastrados por unidade.
          </MDTypography>
        </MDBox>
        <DataTable
          table={{
            columns: [
              { Header: "ID CARTEIRA", accessor: "id", width: "10%" },
              {
                Header: "CLIENTE",
                accessor: (row: TableData) => (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <MDAvatar
                      style={{
                        width: "35px",
                        height: "35px",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                      src={row.customer.face_url}
                      alt={row.customer.name}
                    />
                    <span
                      style={{
                        paddingLeft: "10px",
                      }}
                    >
                      {row.customer.name}
                    </span>
                  </div>
                ),
                width: "15%",
              },
              { Header: "PERMISSÕES", accessor: "permission", width: "15%" },
              { Header: "STATUS SYNC", accessor: "is_sync", width: "15%" },
              { Header: "CATEGORIA", accessor: "category", width: "15%" },
              { Header: "SALDO", accessor: "cash_balance", width: "15%" },
              { Header: "AÇÕES", accessor: "actions", width: "15%" },
            ],
            rows:
              walletData &&
              walletData.map((wallet) => ({
                id: "# " + wallet.client_code,
                customer: {
                  name: wallet.customer.name,
                  email: wallet.customer.email,
                  face_url: wallet.customer.face_url,
                },
                permission: wallet.permission === "client" ? "Cliente" : "Bloqueado",
                is_sync: (
                  <div>
                    {wallet.is_sync ? (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                        }}
                      >
                        <CircleCheckIcon />
                        <span
                          style={{
                            color: "green",
                            paddingLeft: "10px",
                          }}
                        >
                          Sincronizado
                        </span>
                      </div>
                    ) : (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                        }}
                      >
                        <CircleErrorIcon />
                        <span
                          style={{
                            color: "red",
                            paddingLeft: "10px",
                          }}
                        >
                          Não sincronizado
                        </span>
                      </div>
                    )}
                  </div>
                ),
                category:
                  wallet.category === "prepaid"
                    ? "Pré-Pago"
                    : wallet.category === "postpaid"
                    ? "Pós-Pago"
                    : "Open",
                cash_balance:
                  wallet.category === "open"
                    ? "N/A"
                    : `R$ ${wallet.cash_balance.toFixed(2).replace(".", ",")}`,
                actions: (
                  <MDButton
                    variant="outlined"
                    color="secondary"
                    onClick={handleOpenModal}
                    style={{
                      width: "40px !important",
                      height: "40px",
                      borderRadius: "4px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MoreVertIcon />
                  </MDButton>
                ),
              })),
          }}
        />
      </MDBox>
      {/* Modal */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <StyledCard modalPosition={modalPosition}>
          <ModalContent />
          <MDButton onClick={handleCloseModal}>Fechar Modal</MDButton>
        </StyledCard>
      </Modal>
    </DashboardLayout>
  );
}

export default Wallet;
