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

            <div className="cat-itens-section">
                <span>Corpo  </span>
                <img className="circulosIcon" src="img/2.svg"></img>
            </div>
            <div className="cat-itens-section">
              <span>Malte  </span>
              <img className="circulosIcon" src="img/2.svg"></img>
            </div>
            <div className="cat-itens-section">
               <span>Amargor  </span>
               <img className="circulosIcon" src="img/4.svg"></img>
            </div>
            
            
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
      </div>
    </div>
  );
}

export default Panel;
