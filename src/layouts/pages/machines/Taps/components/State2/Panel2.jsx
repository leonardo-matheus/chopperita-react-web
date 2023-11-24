import PropTypes from 'prop-types';

function Panel2({customer},{torneira}) {
  return (
    <div className="painel2">
      <div className="authSucess">
        <div className="authSucessMsg">
          <div className="reconhecido">
            <img id="authCheckOk" src="img/check.svg" alt="beer" />
            <span className="authSucessMsgAlerta"> Reconhecido</span>
          </div>
          <span className="authSucessMsgAlerta" id="authSucessMsgAlertaInfo">Você já pode usar a torneira {torneira}</span>
        </div>
        <div className="authSucessInfo">
          <div className="infoItemOk" id="InfoNome">
            <img src="img/user.svg" alt="user" /><span className="authSucessMsgTxt">{customer.name}</span>
          </div>
          <div className="infoItemOk">
            <img src="img/rank.svg" alt="rank" /><span className="authSucessMsgTxt"> Categoria: <span>{customer.category}</span></span><br />
            <span className="authSucessMsgTxt"> </span>
          </div>
          <div className="infoItemOk">
            <img src="img/value.png" alt="value" /><span className="authSucessMsgTxt"> Seu saldo: <span className="authSucessSaldo2">R$ {(customer.cash_balance).toFixed(2)}</span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

Panel2.propTypes = {
  torneira: PropTypes.string.isRequired,
};

export default Panel2;
