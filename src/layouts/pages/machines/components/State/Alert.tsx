import './Alert.css';

function Alert() {
  return (
    <div className="alerta">
      <div className="alertaIcone">
        <img className="icon" src="img/alerta.svg" alt="alerta" />
      </div>
      <div className="alertaBox">
        <span className="alertaTexto">Faça o reconhecimento facial primeiro</span>
      </div>
    </div>
  );
}

export default Alert;
