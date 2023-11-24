import Icon from "@mui/material/Icon";
import BeerIcon from "assets/images/icons/beer-cup/beer";
import Barrel from "assets/images/icons/barrel/barrel";
import FaucetIcon from "assets/images/icons/faucet/faucet";
import TrayIcon from "assets/images/icons/tray/tray";
import EmployeeIcon from "assets/images/icons/employee/employee";
import PersonIcon from "assets/images/icons/people/people";
import WalletIcon from "assets/images/icons/wallet/wallet";
import routes from "routes";
// ...

const routeIcons: Record<string, JSX.Element> = {
  dashboard: <Icon fontSize="medium">dashboard</Icon>,
  beers: <BeerIcon />,
  barrel: <Barrel />,
  machines: <FaucetIcon />,
  units: <TrayIcon />,
  team: <EmployeeIcon />,
  customer: <PersonIcon />,
  wallet: <WalletIcon />,
};

export const getIconForRoute = (route: string) => {
  // Verifica se a rota tem um ícone correspondente
  console.log(routeIcons[route]);
  if (route in routeIcons) {
    return routeIcons[route];
  }
  // Se o ícone não for encontrado, você pode retornar um ícone padrão ou lidar com isso de outra maneira.
  return <Icon fontSize="medium">defaultIcon</Icon>; // Substitua "defaultIcon" pelo ícone padrão desejado
};

export default routeIcons;
