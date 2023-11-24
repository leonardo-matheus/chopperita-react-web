import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Torneira1.css";

// Importando os componentes de cada estado
import Alert from "./State1/Alert.jsx";
import BeerPanel from "./State/BeerPanel.jsx";
import Alert2 from "./State2/Alert2.jsx";
import Panel2 from "./State2/Panel2.jsx";
import Alert3 from "./State3/Alert3.jsx";
import Panel3 from "./State3/Panel3.jsx";
import Alert4 from "./State4/Alert4.jsx";
import Panel4 from "./State4/Panel4.jsx";
import Alert5 from "./State5/Alert5.jsx";
import Panel5 from "./State5/Panel5.jsx";

function Torneira({ tap }) {
  const { step, beer } = tap;

  const [currentState, setCurrentState] = useState("waiting");

  useEffect(() => {
    if (beer && beer.beer_name === null) {
      // Verificar se beer_name é null
      setCurrentState("warning");
    } else if (step) {
      setCurrentState(step);
    }
  }, [step, beer]);

  // Função para renderizar o conteúdo com base no estado atual
  const renderContent = () => {
    switch (currentState) {
      case "waiting":
        return (
          // eslint-disable-next-line react/jsx-filename-extension
          <div>
            <Alert />
            <BeerPanel beer={tap.beer} />
          </div>
        );
      case "authenticated":
        return (
          <div>
            <Alert2 torneira={""} />
            <Panel2 customer={tap.customer_using} torneira={""} />
          </div>
        );
      case "serving":
        return (
          <div>
            <Alert3 torneira="" />
            <Panel3 beer={tap.beer} customer={tap.customer_using} />
          </div>
        );
      case "concluded":
        return (
          <div>
            <Alert4 />
            <Panel4 />
          </div>
        );
      case "warning":
        return (
          <div>
            <Alert5 />
            <Panel5 msg={tap.display_message} />
          </div>
        );
      default:
        return null;
    }
  };

  Torneira.propTypes = {
    tap: PropTypes.shape({
      step: PropTypes.string.isRequired,
      beer: PropTypes.shape({
        abu_bitterness: PropTypes.string,
        abv_alcohol_content: PropTypes.string,
        beer_name: PropTypes.string,
        beer_url: PropTypes.string,
        coloring: PropTypes.string,
        description: PropTypes.string,
        label: PropTypes.string,
      }).isRequired,
      customer_using: PropTypes.shape({
        birthday: PropTypes.string,
        cash_balance: PropTypes.number,
        category: PropTypes.string,
        customer_id: PropTypes.number,
        face_url: PropTypes.string,
        name: PropTypes.string,
        size_liters: PropTypes.number,
        total_debt: PropTypes.number,
      }).isRequired,
      display_message: PropTypes.string,
      valve: PropTypes.bool,
      amount: PropTypes.number,
    }).isRequired,
  };

  return (
    <div className="container">
      <div className="bloco">{renderContent()}</div>
    </div>
  );
}

export default Torneira;
