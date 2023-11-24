import { useState } from "react";

/* eslint-disable react/prop-types */
// ProductsList page components
import IdCell from "layouts/pages/beers/components/IdCell";
import DefaultCell from "layouts/pages/beers/components/DefaultCell";
import StatusCell from "layouts/pages/beers/components/StatusCell";
import CustomerCell from "layouts/pages/beers/components/CustomerCell";

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import team5 from "assets/images/team-5.jpg";
import ivana from "assets/images/ivana-squares.jpg";
import LogoSvg from "layouts/authentication/sign-in/";

const dataTableData = {
  columns: [
    { Header: "id do barril", accessor: "id", Cell: ({ value }: any) => <IdCell id={value} /> },
    {
      Header: "capacidade",
      accessor: "product",
      Cell: ({ value }: any) => {
        const [name, data] = value;

        return (
          <DefaultCell
            value={typeof value === "string" ? value : name}
            suffix={data.suffix || false}
          />
        );
      },
    },
    {
      Header: "cerveja vinculada",
      accessor: "customer",
      Cell: ({ value: [name, data] }: any) => (
        <CustomerCell image={data.image} color={data.color || "dark"} name={name} />
      ),
    },
    {
      Header: "marca",
      accessor: "label",
      Cell: ({ value }: any) => <DefaultCell value={value} />,
    },
    {
      Header: "status",
      accessor: "status",
      Cell: ({ value }: any) => {
        let status;

        if (value === "paid") {
          status = <StatusCell icon="done" color="success" status="Ativo" />;
        } else {
          status = <StatusCell icon="close" color="error" status="Canceled" />;
        }

        return status;
      },
    },
    {
      Header: "ações",
      accessor: "revenue",
      Cell: ({ value }: any) => <DefaultCell value={value} />,
    },
  ],

  rows: [
    {
      id: "#1",
      label: "Marca da Cerveja",
      status: "paid",
      customer: ["Nome da cerveja", { image: <LogoSvg /> }],
      product: "Barril 01",
      revenue: "R$4,00 / 100ml",
    },
  ],
};

export default dataTableData;
