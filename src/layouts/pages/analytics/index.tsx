import React, { useEffect, useState } from "react";
import DataTable from "examples/Tables/DataTable"; // Substitua pelo caminho correto para o seu DataTable
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import { useAuth } from "hooks/AuthContext";
import { useNavigate } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Card from "@mui/material/Card";

//  Components
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import BookingCard from "examples/Cards/BookingCard";

// Anaytics dashboard components
import SalesByCountry from "./components/SalesByCountry";

// Data
import reportsBarChartData from "./data/reportsBarChartData";
import reportsLineChartData from "./data/reportsLineChartData";
import ChannelsChart from "./components/ChannelsChart";

// Data
import defaultLineChartData from "./data/defaultLineChartData";
import horizontalBarChartData from "./data/horizontalBarChartData";
import salesTableData from "./data/salesTableData";
import dataTableData from "./data/dataTableData";

// Images
import booking1 from "assets/images/products/product-1-min.jpg";
import booking2 from "assets/images/products/product-2-min.jpg";
import booking3 from "assets/images/products/product-3-min.jpg";
import DefaultStatisticsCard from "examples/Cards/StatisticsCards/DefaultStatisticsCard";

function Dashboard() {
  const { token, logout } = useAuth();
  const { sales, tasks } = reportsLineChartData;
  const navigate = useNavigate();

  // Action buttons for the BookingCard
  const actionButtons = (
    <>
      <Tooltip title="Refresh" placement="bottom">
        <MDTypography
          variant="body1"
          color="primary"
          lineHeight={1}
          sx={{ cursor: "pointer", mx: 3 }}
        >
          <Icon color="inherit">refresh</Icon>
        </MDTypography>
      </Tooltip>
      <Tooltip title="Edit" placement="bottom">
        <MDTypography variant="body1" color="info" lineHeight={1} sx={{ cursor: "pointer", mx: 3 }}>
          <Icon color="inherit">edit</Icon>
        </MDTypography>
      </Tooltip>
    </>
  );

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

  const [salesDropdownValue, setSalesDropdownValue] = useState<string>("6 May - 7 May");
  const [customersDropdownValue, setCustomersDropdownValue] = useState<string>("6 May - 7 May");
  const [revenueDropdownValue, setRevenueDropdownValue] = useState<string>("6 May - 7 May");

  // DefaultStatisticsCard state for the dropdown action
  const [salesDropdown, setSalesDropdown] = useState<string | null>(null);
  const [customersDropdown, setCustomersDropdown] = useState<string | null>(null);
  const [revenueDropdown, setRevenueDropdown] = useState<string | null>(null);

  // DefaultStatisticsCard handler for the dropdown action
  const openSalesDropdown = ({ currentTarget }: any) => setSalesDropdown(currentTarget);
  const closeSalesDropdown = ({ currentTarget }: any) => {
    setSalesDropdown(null);
    setSalesDropdownValue(currentTarget.innerText || salesDropdownValue);
  };
  const openCustomersDropdown = ({ currentTarget }: any) => setCustomersDropdown(currentTarget);
  const closeCustomersDropdown = ({ currentTarget }: any) => {
    setCustomersDropdown(null);
    setCustomersDropdownValue(currentTarget.innerText || salesDropdownValue);
  };
  const openRevenueDropdown = ({ currentTarget }: any) => setRevenueDropdown(currentTarget);
  const closeRevenueDropdown = ({ currentTarget }: any) => {
    setRevenueDropdown(null);
    setRevenueDropdownValue(currentTarget.innerText || salesDropdownValue);
  };

  // Dropdown menu template for the DefaultStatisticsCard
  const renderMenu = (state: any, close: any) => (
    <Menu
      anchorEl={state}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      open={Boolean(state)}
      onClose={close}
      keepMounted
      disableAutoFocusItem
    >
      <MenuItem onClick={close}>Last 7 days</MenuItem>
      <MenuItem onClick={close}>Last week</MenuItem>
      <MenuItem onClick={close}>Last 30 days</MenuItem>
    </Menu>
  );

  // O usuário está autenticado, renderize o conteúdo do painel
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={5}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Bookings"
                count={281}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than last week",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Today's Users"
                count="2,300"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Revenue"
                count="34k"
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Followers"
                count="+91"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox mb={2.5} mt={1.5}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <DefaultStatisticsCard
              title="sales"
              count="$230,220"
              percentage={{
                color: "success",
                value: "+55%",
                label: "since last month",
              }}
              dropdown={{
                action: openSalesDropdown,
                menu: renderMenu(salesDropdown, closeSalesDropdown),
                value: salesDropdownValue,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <DefaultStatisticsCard
              title="customers"
              count="3.200"
              percentage={{
                color: "success",
                value: "+12%",
                label: "since last month",
              }}
              dropdown={{
                action: openCustomersDropdown,
                menu: renderMenu(customersDropdown, closeCustomersDropdown),
                value: customersDropdownValue,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <DefaultStatisticsCard
              title="avg. revenue"
              count="$1.200"
              percentage={{
                color: "secondary",
                value: "+$213",
                label: "since last month",
              }}
              dropdown={{
                action: openRevenueDropdown,
                menu: renderMenu(revenueDropdown, closeRevenueDropdown),
                value: revenueDropdownValue,
              }}
            />
          </Grid>
        </Grid>
      </MDBox>
      <MDBox py={3}>
        <Grid container>
          <SalesByCountry />
        </Grid>
        <MDBox mt={6}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="website views"
                  description="Last Campaign Performance"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="daily sales"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="completed tasks"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mt={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mt={3}>
                <BookingCard
                  image={booking1}
                  title="Cozy 5 Stars Apartment"
                  description='The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.'
                  price="$899/night"
                  location="Barcelona, Spain"
                  action={actionButtons}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mt={3}>
                <BookingCard
                  image={booking2}
                  title="Office Studio"
                  description='The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.'
                  price="$1.119/night"
                  location="London, UK"
                  action={actionButtons}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mt={3}>
                <BookingCard
                  image={booking3}
                  title="Beautiful Castle"
                  description='The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.'
                  price="$459/night"
                  location="Milan, Italy"
                  action={actionButtons}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
