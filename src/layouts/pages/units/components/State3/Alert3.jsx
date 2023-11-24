import './Alert3.css';

import PropTypes from 'prop-types';

function Alert3({torneira}) {
  return (
    <div className="alertaok">
      <div className="alertaIcone">
        <img className="icon" src="img/check.svg" alt="alerta"></img>
      </div>
      <div className="alertaBox">
        <span className="alertaTextoOk">Torneira {torneira} em Uso</span>
      </div>
    </div>
  );
}

Alert3.propTypes = {
  torneira: PropTypes.string.isRequired
};

export default Alert3;

