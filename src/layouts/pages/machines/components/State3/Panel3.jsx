function Panel3({ customer, beer }) {
  return (
    <div className="painel3">
                <div className="painelInfo">
                    <div className="painelInfoImg">
                        <img src={customer.face_url} alt="user"></img>
                    </div>
                    <div className="painelInfoTxt">
                        <div className="infoSaldo">
                            <img src="img/value.png" alt="value"></img><span className="infoSaldoTxt"> Seu saldo </span>
                        </div>
                        <div className="infoSaldoValorTotal">
                            <span className="infoSaldoValorTotal">R$ {(customer.cash_balance).toFixed(2)}</span>
                        </div>
                    </div>
                </div>
                <div className="painelInfo">
                    <div className="painelInfoImg">
                        <img src={beer.beer_url} alt="chopp"></img>
                    </div>
                    <div className="painelInfoTxt">
                        <div className="infoSaldo">
                            <img src="img/value.png" alt="value"></img><span className="infoSaldoTxt"> Preço / 100ml </span>
                        </div>
                        <div className="infoSaldoValor">
                            <span className="infoSaldoValor">R$ {(+beer.price_liters / 10).toFixed(2)}</span>
                        </div>
                    </div>
                </div>
                <div className="painelInfoTotal">
                    <div className="painelInfoItem" id="totalVolume">
                        <div className="infoSaldo">
                            <img src="img/gota.svg" alt="value"></img><span className="infoSaldoTxt"> Total/ml </span>
                        </div>
                        <div className="infoSaldoValorTotal">
                            <span className="infoSaldoValorTotal">{(customer.size_liters * 1000)}ml</span>
                        </div>
                    </div>
                    <div className="painelInfoItem" id="totalPreco">
                        <div className="infoSaldo">
                            <img src="img/value.png" alt="value"></img><span className="infoSaldoTxt"> Total debitado </span>
                        </div>
                        <div className="infoSaldoValorTotal">
                            <span className="infoSaldoValorTotal">R$ {(customer.total_debt).toFixed(2)}</span>
                        </div>
                    </div>
                </div>
    </div>
  );
}

export default Panel3;
