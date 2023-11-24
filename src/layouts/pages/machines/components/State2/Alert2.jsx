import './Alert2.css';

import PropTypes from 'prop-types';

function Alert2({torneira}) {
  return (
    <div className="alertaok">
      <div className="alertaIcone">
        <img className="icon" src="img/check.svg" alt="alerta" />
      </div>
      <div className="alertaBox">
        <span className="alertaTextoOk">Torneira {torneira} Liberada</span>
      </div>
    </div>
  );
}

Alert2.propTypes = {
  torneira: PropTypes.string.isRequired,
};

export default Alert2;

