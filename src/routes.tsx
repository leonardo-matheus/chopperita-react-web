// Routes for router
import Dashboard from "layouts/pages/analytics";
import Settings from "layouts/pages/account/settings";
import Wallet from "layouts/pages/wallet";
import Basic from "layouts/authentication/sign-in";
import Customer from "layouts/pages/costumer";
import Team from "layouts/pages/team";
import Beers from "layouts/pages/beers";

// Components
import MDAvatar from "components/MDAvatar";

// @mui icons
import Icon from "@mui/material/Icon";

// Images
import profilePicture from "assets/images/team-3.jpg";
import BeerIcon from "assets/images/icons/beer-cup/beer";
import Barrel from "assets/images/icons/barrel/barrel";
import FaucetIcon from "assets/images/icons/faucet/faucet";
import TrayIcon from "assets/images/icons/tray/tray";
import EmployeeIcon from "assets/images/icons/employee/employee";
import PersonIcon from "assets/images/icons/people/people";
import WalletIcon from "assets/images/icons/wallet/wallet";
import LogoutIcon from "assets/images/icons/logout/logout";
import { useNavigate } from "react-router-dom";
import Logout from "layouts/authentication/logout/Logout";
import BarrelManage from "layouts/pages/barrel";
import Machines from "layouts/pages/machines";
import Units from "layouts/pages/units";

const navigate = useNavigate;

const handleLogout = () => {
  const navigate = useNavigate(); // Inicialize a função navigate

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  fetch("http://choperita.ddns.net/api/logout", options)
    .then((response) => response.json())
    .then((data) => {
      if (data && data.message === "Logout successful") {
        navigate("/login");
      } else {
        console.error("Erro ao fazer logout");
      }
    })
    .catch((error) => {
      console.error("Erro ao fazer logout:", error);
    });
};

const routes = [
  {
    type: "collapse",
    name: "Leonardo Silva",
    key: "leonardo-m-silva",
    icon: <MDAvatar src={profilePicture} alt="usuario" size="sm" />,
    noCollapse: true,
    route: "/pages/account/settings",
    component: <Settings />,
  },
  { type: "divider", key: "divider-0" },
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="medium">dashboard</Icon>,
    route: "/dashboard",
    noCollapse: true,
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Gestão de Cervejas",
    key: "beers",
    icon: <BeerIcon />,
    route: "/beers",
    noCollapse: true,
    component: <Beers />,
  },
  {
    type: "collapse",
    name: "Gestão de Barril",
    key: "barrel",
    icon: <Barrel />,
    route: "/barrel",
    noCollapse: true,
    component: <BarrelManage />,
  },
  {
    type: "collapse",
    name: "Gestão de Máquinas",
    key: "machines",
    icon: <FaucetIcon />,
    route: "/machines",
    noCollapse: true,
    component: <Machines />,
  },
  {
    type: "collapse",
    name: "Gestão de Unidades",
    key: "units",
    icon: <TrayIcon />,
    route: "/units",
    noCollapse: true,
    component: <Units />,
  },
  {
    type: "collapse",
    name: "Gestão de Funcionários",
    key: "team",
    icon: <EmployeeIcon />,
    route: "/team",
    noCollapse: true,
    component: <Team />,
  },
  {
    type: "collapse",
    name: "Gestão de Clientes",
    key: "customer",
    icon: <PersonIcon />,
    route: "/customer",
    noCollapse: true,
    component: <Customer />,
  },
  {
    type: "collapse",
    name: "Gestão de Carteiras",
    key: "wallet",
    icon: <WalletIcon />,
    route: "/wallet",
    noCollapse: true,
    component: <Wallet />,
  },
  { type: "divider", key: "divider-1" },
  {
    type: "collapse",
    name: "Sair",
    key: "logout",
    route: "/sair",
    icon: <LogoutIcon />,
    component: <Logout />,
    noCollapse: true,
  },
  {
    name: "login",
    key: "login",
    route: "/login",
    component: <Basic />,
    noCollapse: true,
  },
];

export default routes;
