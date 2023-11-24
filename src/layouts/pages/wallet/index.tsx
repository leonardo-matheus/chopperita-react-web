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
import { Backdrop, Grid, Modal, styled } from "@mui/material";
import MDButton from "components/MDButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ModalContent from "./components/ModalContent";
import { useMediaQuery, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Card, CardProps } from "@mui/material";
import ProductInfo from "../costumer/components/ProductInfo";
import axios from "axios";
import { MoreVert } from "@mui/icons-material";
import { Fade } from "@mui/material";
import form from "../users/new-user/schemas/form";
import FormDataLibrary from "form-data";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";

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

interface FormDataWallet {
  customer_id: string;
  client_code: string;
  cash_balance: number;
  category: string;
  permission: string;
}

function Wallet() {
  const [formData, setFormData] = useState<FormDataWallet>({
    customer_id: "",
    client_code: "",
    cash_balance: 100,
    category: "postpaid",
    permission: "client",
  });
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    // O usuário não está autenticado, redirecione para a página de login
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  // Se o token não estiver presente, significa que o usuário não está autenticado
  // e o redirecionamento já deve ter ocorrido
  if (!token) {
    return null;
  }

  // O usuário está autenticado, renderize o componente
  const [walletData, setWalletData] = useState<TableData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            Authorization: "Token 55412e9a5ac33cd1a55322e83b5918374cc92db5",
            "Content-Type": "application/json",
          },
        };

        const response = await fetch("http://192.168.88.100:5000/api/wallet", options);
        const data = await response.json();
        setWalletData(data.data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
  }, []);
  const handleFormSubmit = async () => {
    const form = new FormDataLibrary();
    form.append("customer_id", formData.customer_id);
    form.append("client_code", formData.client_code);
    form.append("cash_balance", formData.cash_balance.toString());
    form.append("category", formData.category);
    form.append("permission", formData.permission);

    sendFormData(form);
  };

  const sendFormData = (form: FormDataLibrary) => {
    axios
      .post("http://192.168.88.100:5000/api/customer", form, {
        headers: {
          Authorization: "Token 55412e9a5ac33cd1a55322e83b5918374cc92db5",
        },
      })
      .then((response: AxiosResponse) => {
        console.log(response.data);
        toast.success("Cadastro salvo com sucesso!");
        setFormData({
          customer_id: "",
          client_code: "",
          cash_balance: 100,
          category: "postpaid",
          permission: "client",
        });
        // handleCreateModalClose();
      })
      .catch((err) => {
        console.error(err);
        if (err.response && err.response.data && err.response.data.err) {
          const apiErrors = err.response.data.err;
          apiErrors.forEach((error: any) => toast.error(error.message));
        } else {
          toast.error("Erro desconhecido");
        }
      });
  };

  interface ModalPosition {
    top: number;
    left: number;
  }
  interface StyledCardProps extends CardProps {
    modalPosition: ModalPosition;
    children: React.ReactNode;
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
          width: "200px",
          padding: "2px",
          textAlign: "center",
          borderRadius: "8px",
        }}
      >
        {children}
      </Card>
    );
  });

  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  // State for modal
  const [openModal, setOpenModal] = useState(false);

  // Function to open the modal
  const handleOpenModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget;
    const buttonRect = target.getBoundingClientRect();
    setModalPosition({
      top: buttonRect.top + window.scrollY,
      left: buttonRect.left + window.scrollX - 200,
    });
    setOpenModal(true);
  };
  // Function to close the modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80vw",
    height: "80vh",
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    py: 2,
  };

  // const handleCreateModalOpen = () => {
  //   setCreateModalOpen(true);
  // };

  // const handleCreateModalClose = () => {
  //   setCreateModalOpen(false);
  // };

  const [formDataWallet, setFormDataWallet] = useState<FormDataWallet>({
    customer_id: "",
    client_code: "",
    cash_balance: 100,
    category: "postpaid",
    permission: "client",
  });

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox m={3} />
      <MDButton display="flex" variant="gradient" color="info">
        Cadastrar Cliente
      </MDButton>
      <MDBox m={3} />
      <Card>
        <MDBox pt={1} pb={3}>
          <MDBox p={3} lineHeight={1}>
            <MDTypography variant="h5" fontWeight="medium">
              Lista de carteiras
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
                      p={0}
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
                        padding: "0 !important",
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
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          BackdropProps={{ style: { backgroundColor: "transparent" } }}
        >
          <StyledCard modalPosition={modalPosition} style={{ transition: "all 0.3s ease-in-out" }}>
            <ModalContent />
          </StyledCard>
        </Modal>
        <Card className="registerUser" variant="outlined">
          <Modal
            open={isCreateModalOpen}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={isCreateModalOpen}>
              <MDBox sx={style} mt={2}>
                <Grid item xs={18} lg={20}></Grid>
                <MDBox display="flex" justifyContent="space-around" mt={"10rem"}>
                  <MDButton
                    size="large"
                    marginRight={2}
                    variant="gradient"
                    color="error"
                    margin={4}
                  >
                    Cancelar
                  </MDButton>
                  <MDButton onClick={handleFormSubmit} variant="gradient" color="info">
                    Salvar
                  </MDButton>
                </MDBox>
              </MDBox>
            </Fade>
          </Modal>
        </Card>
      </Card>
    </DashboardLayout>
  );
}

export default Wallet;
