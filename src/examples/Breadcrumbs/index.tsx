import routes from "routes";
import { Link } from "react-router-dom";
import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import routeIcons, { getIconForRoute } from "routeIcons";

interface Props {
  title: string;
  route: string | string[];
  light?: boolean;
  [key: string]: any;
}

function Breadcrumbs({ title, route, light }: Props): JSX.Element {
  const currentRoute = Array.isArray(route) ? route.join("/") : route;

  const icon = getIconForRoute(currentRoute);

  return (
    <MDBox mr={{ xs: 0, xl: 8 }}>
      <MuiBreadcrumbs>
        <Link to="/">
          <MDTypography
            component="span"
            variant="body2"
            color={light ? "white" : "white"}
            opacity={light ? 0.8 : 1}
            sx={{ lineHeight: 0 }}
          >
            {icon}
          </MDTypography>
        </Link>
        {routes.map((routeConfig) => {
          if (routeConfig.route === currentRoute) {
            return (
              <MDTypography
                key={routeConfig.key}
                component="span"
                variant="button"
                fontWeight="regular"
                textTransform="capitalize"
                color={light ? "white" : "white"}
                opacity={light ? 0.8 : 0.8}
                sx={{ lineHeight: 0 }}
              >
                {routeConfig.name}
              </MDTypography>
            );
          }
          return null;
        })}
        <MDTypography
          fontWeight="bold"
          textTransform="capitalize"
          variant="h6"
          color={light ? "white" : "white"}
          sx={{ lineHeight: 0 }}
        >
          {title.replace("-", " ")}
        </MDTypography>
      </MuiBreadcrumbs>
    </MDBox>
  );
}

Breadcrumbs.defaultProps = {
  light: false,
};

export default Breadcrumbs;
