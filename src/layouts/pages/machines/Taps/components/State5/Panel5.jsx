import PropTypes from 'prop-types';
function Panel5({msg}) {
  const mensagemPadrao = "Ocorreu um erro inesperado. Contate o suporte.";
  return (
    <div className="painel5">
                <div className="error">
                    <span className="errorTxt">Algo deu errado!</span>

                    <img className="iconError" src="img/alerta-dark.svg" alt="alerta"></img>

                    <span className="erroTxtMsg">{msg ?? mensagemPadrao}</span>
                    
                </div>
    </div>
  );
}

Panel5.propTypes = {
  msg: PropTypes.string, 
};

export default Panel5;
