import CorCerveja from "../CorCerveja";
import CatCircle from "../catCircle";
import { CircleGroup } from "../CircleGroup";

function BeerPanel({beer , torneira}) {
  const colorStyle = {
    backgroundColor: beer.coloring,
  };

  return (
    <div className="painel">
      <div className="info">
        <div>
          <div className="infoItem">
            <img src="/img/beer.svg" alt="beer" />
            <span className="infoItemTxt">{beer.beer_name}</span>
          </div>
          <div className="infoItem">
            <img src="/img/beer-cup.svg" alt="beer-cup" />
            <span className="infoItemTxt">{beer.label}</span>
          </div>
          <div className="infoItem">
            <img src="/img/gota.svg" alt="gota" />
            <div >
              <span className="infoItemTxt">Teor Álcool - ABV </span>
              <div className="teor">
                <CircleGroup filledQnt={Number(beer.abv_alcohol_content)}/>
              </div>
            </div>
          </div>
          <div className="infoItem">
            <img src="/img/malte.svg" alt="malte" />
            <div >
              <span className="infoItemTxt">Amargor - IBU </span>
              <div className="teor">
               <CircleGroup filledQnt={Number(beer.abu_bitterness)}/>
              </div>
            </div>
          </div>
          
          <div className="infoItem">
            <div className="corCerveja">
              <div className="corCervejaInterno" style={colorStyle}></div>
            </div>
            <span className="infoItemTxt">Cor da cerveja</span>
          </div>
          <div className="infoItem">
            <img src="/img/value.png" alt="value" />
            <div className="infoItemValor">
              <p className="infoItemTxt">Preço / 100ml</p>
              <span id="infoItemTxtValor" className="infoItemTxt">R$ {(+beer.price_liters / 10).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="imagem">
        <img src={beer.beer_url} />
      </div>
    </div>
  );
}

export default BeerPanel;
