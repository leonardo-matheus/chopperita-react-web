function Panel() {
  return (
    <div className="painel">
      <div className="info">
        <div>
          <div className="infoItem">
            <img src="/img/beer.svg" alt="beer" />
            <span className="infoItemTxt">IPA</span>
          </div>
          <div className="infoItem">
            <img src="/img/beer-cup.svg" alt="beer-cup" />
            <span className="infoItemTxt">Estilo American India Pale Ale</span>
          </div>
          <div className="infoItem">
            <img src="/img/gota.svg" alt="gota" />
            <span className="infoItemTxt">ABV - % Alcoólica 5,7 %</span>
          </div>
          <div className="infoItem">
            <img src="/img/malte.svg" alt="malte" />
            <span className="infoItemTxt">Características</span>
          </div>
          <div className="cat-itens">
            <span>Corpo</span>
            <span>Malte</span>
            <span>Amargor</span>
          </div>
          <div className="infoItem">
            <div className="corCerveja">
              <div className="corCervejaInterno"></div>
            </div>
            <span className="infoItemTxt">Cor da cerveja</span>
          </div>
          <div className="infoItem">
            <img src="/img/value.png" alt="value" />
            <div className="infoItemValor">
              <p className="infoItemTxt">Preço / 100ml</p>
              <span className="infoItemTxt">R$ 4,80</span>
            </div>
          </div>
        </div>
      </div>
      <div className="imagem">
        <img src="/img/ipa.webp" alt="ipa" />
        <div className="imagemGarrafa">
          <img src="/img/ipa.webp" alt="ipa" />
        </div>
      </div>
    </div>
  );
}

export default Panel;
