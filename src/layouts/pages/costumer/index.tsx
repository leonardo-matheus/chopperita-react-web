import React, { useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import MDBox from "components/MDBox";
import Typography from "@mui/material/Typography";
import MDButton from "components/MDButton";
import ProductInfo from "./components/ProductInfo";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import axios, { AxiosResponse, AxiosError } from "axios";
import FormDataLibrary from "form-data";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Mask from "./components/MDInput/Mask";

interface FormData {
  id?: number;
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
  textmask?: string;
}

const Customer: React.FC = () => {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    id: undefined,
    name: "",
    face_url: "",
    identifier: "",
    email: "",
    phone: "",
    profession: "",
    office: "",
    city: "",
    state: "",
    birthday: "",
    textmask: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === "birthday") {
      const formattedBirthday = value.split("/").reverse().join("-");
      setFormData((prevFormData) => ({
        ...prevFormData,
        birthday: formattedBirthday,
      }));
    }
  };

  const formatIdentifier = (value: string): string => {
    const cleanedValue = value.replace(/[^\d]/g, "").slice(0, 11);
    return cleanedValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  };

  const formatPhone = (value: string): string => {
    const cleanedValue = value.replace(/[^\d]/g, "").slice(0, 11);
    const formattedValue = cleanedValue.startsWith("55") ? cleanedValue.substring(2) : cleanedValue;

    return `+55(${formattedValue.slice(0, 2)})${formattedValue.slice(2, 7)}-${formattedValue.slice(
      7
    )}`;
  };

  const handleFormSubmit = async () => {
    const form = new FormDataLibrary();
    form.append("name", formData.name);
    form.append("identifier", formatIdentifier(formData.identifier));
    form.append("email", formData.email);

    const formattedPhone = formatPhone(formData.phone);
    const phoneToAppend = formattedPhone.startsWith("+55")
      ? formattedPhone.substring(3)
      : formattedPhone;
    form.append("phone", `+55${phoneToAppend}`);

    form.append("profession", formData.profession);
    form.append("office", formData.office);
    form.append("city", formData.city);
    form.append("state", formData.state);
    form.append("birthday", formData.birthday);

    if (formData.face_url) {
      try {
        const response = await fetch(formData.face_url);
        const blob = await response.blob();
        form.append("face_url", blob, "image.webp");
      } catch (err) {
        console.error(err);
      }
    }

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
          textmask: "",
          id: undefined,
          name: "",
          face_url: "",
          identifier: "",
          email: "",
          phone: "",
          profession: "",
          office: "",
          city: "",
          state: "",
          birthday: "",
        });
        handleCreateModalClose();
      })
      .catch((err) => {
        console.error(err);
        if (err.response && err.response.data && err.response.data.err) {
          const apiErrors = err.response.data.err;

          if (Array.isArray(apiErrors)) {
            apiErrors.forEach((error) => {
              if (error["missing fields"]) {
                toast.error(
                  `Erro: Campos obrigatórios ausentes - ${error["missing fields"].join(", ")}`
                );
              }
            });
          } else if (typeof apiErrors === "object") {
            if (apiErrors.msg === "Request should not be empty") {
              toast.error("Erro: O pedido não deve estar vazio.");
            }
          } else if (typeof apiErrors === "string") {
            if (apiErrors.includes("The identifier field does not have the valid CPF format.")) {
              toast.error("Erro: O campo de identificação não possui o formato de CPF válido.");
            } else if (apiErrors.includes("The email field must be a valid email address.")) {
              toast.error("Erro: O campo de e-mail deve ser um endereço de e-mail válido.");
            } else if (
              apiErrors.includes(
                "The telephone field is not a telephone number with a valid code and area code."
              )
            ) {
              toast.error(
                "Erro: O campo de telefone não é um número de telefone válido com código e DDD."
              );
            } else if (apiErrors.includes("No image provided")) {
              toast.error("Erro: Nenhuma imagem fornecida.");
            } else if (apiErrors.includes("Customer is not over 18 years old!.")) {
              toast.error("Erro: Usuário não tem mais de 18 anos!.");
            } else if (
              apiErrors.includes("The birthday field does not have the valid datetime format.")
            ) {
              toast.error("A data de aniversário não é válida.");
            }
          }
        } else {
          toast.error(
            "Erro ao salvar o cadastro. Por favor, verifique os dados e tente novamente."
          );
        }
      });
  };

  const handleUpdateProfile = async (customerId: number) => {
    const form = new FormDataLibrary();
    form.append("name", formData.name);
    form.append("face_url", "C:\\Users\\leona\\Downloads\\unnamed.webp");
    form.append("identifier", formData.identifier);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("profession", formData.profession);
    form.append("office", formData.office);
    form.append("city", formData.city);
    form.append("state", formData.state);
    form.append("birthday", formData.birthday);

    const options = {
      method: "PUT",
      url: `http://192.168.88.100:5000/api/customer/${customerId}`,
      headers: {
        Authorization: "Token 55412e9a5ac33cd1a55322e83b5918374cc92db5",
        "Content-Type": "multipart/form-data; boundary=---011000010111000001101001",
      },
      data: form,
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      toast.success("Perfil atualizado com sucesso!");
      // Outras ações necessárias após a atualização
    } catch (error) {
      console.error(error);
      // Tratar erro, como exibir mensagem ao usuário
    }
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

  const handleCreateModalOpen = () => {
    setCreateModalOpen(true);
  };

  const handleCreateModalClose = () => {
    setCreateModalOpen(false);
  };

  const handleSearchByCPF = async (cpf: string) => {
    try {
      const response = await axios.get(
        `http://192.168.88.100:5000/api/customer_by_identifier/${formatIdentifier(cpf)}`,
        {
          headers: {
            Authorization: "Token 55412e9a5ac33cd1a55322e83b5918374cc92db5",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data) {
        // Preencher os campos do formData com os dados obtidos
        const customerData = response.data;
        setFormData({
          id: customerData.id,
          name: customerData.name || "",
          face_url: "",
          identifier: customerData.identifier || "",
          email: customerData.email || "",
          phone: customerData.phone || "",
          profession: customerData.profession || "",
          office: customerData.office || "",
          city: customerData.city || "",
          state: customerData.state || "",
          birthday: customerData.birthday || "",
        });

        // Abrir o modal
        handleCreateModalOpen();
      }
    } catch (error: any) {
      console.error(error);
      // Tratar erro, como exibir mensagem ao usuário
      const axiosError = error as AxiosError<unknown>;
      if (
        axiosError.response &&
        axiosError.response.status === 404 &&
        axiosError.response.data &&
        typeof axiosError.response.data === "object" &&
        "msg" in axiosError.response.data &&
        typeof axiosError.response.data.msg === "string" &&
        axiosError.response.data.msg.includes("not registered")
      ) {
        // Exibir toast de erro
        toast.error("Cliente não encontrado pelo CPF informado");
      } else {
        // Tratar outros erros, se necessário
        toast.error("Erro ao buscar cliente pelo CPF");
      }
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox my={3} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
        <MDBox>
          <MDBox display="flex" alignItems="space-between" justifyContent="space-around">
            <MDButton
              onClick={handleCreateModalOpen}
              display="flex"
              variant="gradient"
              color="info"
            >
              Cadastrar Cliente
            </MDButton>
            <Mask
              value={formData.textmask}
              onChange={(value) => setFormData({ ...formData, textmask: value })}
              onEnterPress={() => handleSearchByCPF(formData.textmask || "")}
            />
          </MDBox>
        </MDBox>
        <Card className="registerUser" variant="outlined">
          <Modal
            open={isCreateModalOpen}
            onClose={handleCreateModalClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={isCreateModalOpen}>
              <MDBox sx={style} mt={2}>
                <Grid item xs={18} lg={20}>
                  <ProductInfo
                    formData={formData}
                    setFormData={setFormData}
                    onUpdateFormData={(data) => setFormData(data)}
                  />
                </Grid>
                <MDBox display="flex" justifyContent="space-around" mt={"10rem"}>
                  <MDButton
                    size="large"
                    onClick={handleCreateModalClose}
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
      </MDBox>
    </DashboardLayout>
  );
};

export default Customer;
