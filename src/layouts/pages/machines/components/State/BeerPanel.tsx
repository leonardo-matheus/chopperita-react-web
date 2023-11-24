import CorCerveja from "../CorCerveja";
import CatCircle from "../catCircle";
import CircleGroup from "../CircleGroup";
import MDBox from "components/MDBox";

function BeerPanel({ beer, torneira }: { beer: any; torneira: any }) {
  const colorStyle = {
    backgroundColor: beer.coloring,
  };

  return (
    <MDBox className="painel">
      <MDBox className="info">
        <MDBox>
          <MDBox className="infoItem">
            <img src="/img/beer.svg" alt="beer" />
            <span className="infoItemTxt">{beer.beer_name}</span>
          </MDBox>
          <MDBox className="infoItem">
            <img src="/img/beer-cup.svg" alt="beer-cup" />
            <span className="infoItemTxt">{beer.label}</span>
          </MDBox>
          <MDBox className="infoItem">
            <img src="/img/gota.svg" alt="gota" />
            <MDBox>
              <span className="infoItemTxt">Teor Álcool - ABV </span>
              <MDBox className="teor">
                <CircleGroup filledQnt={Number(beer.abv_alcohol_content)} />
              </MDBox>
            </MDBox>
          </MDBox>
          <MDBox className="infoItem">
            <img src="/img/malte.svg" alt="malte" />
            <MDBox>
              <span className="infoItemTxt">Amargor - IBU </span>
              <MDBox className="teor">
                <CircleGroup filledQnt={Number(beer.abu_bitterness)} />
              </MDBox>
            </MDBox>
          </MDBox>

          <MDBox className="infoItem">
            <MDBox className="corCerveja">
              <MDBox className="corCervejaInterno" style={colorStyle}></MDBox>
            </MDBox>
            <span className="infoItemTxt">Cor da cerveja</span>
          </MDBox>
          <MDBox className="infoItem">
            <img src="/img/value.png" alt="value" />
            <MDBox className="infoItemValor">
              <p className="infoItemTxt">Preço / 100ml</p>
              <span id="infoItemTxtValor" className="infoItemTxt">
                R$ {(+beer.price_liters / 10).toFixed(2)}
              </span>
            </MDBox>
          </MDBox>
        </MDBox>
      </MDBox>
      <MDBox className="imagem">
        <img src={beer.beer_url} />
      </MDBox>
    </MDBox>
  );
}

export default BeerPanel;
