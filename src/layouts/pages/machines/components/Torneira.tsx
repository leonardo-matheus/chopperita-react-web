import BeerPanel from "./State/BeerPanel";

type Tap = {
  beer: any;
  torneira: any;
  status: string;
};

export type { Tap };

function Torneira({ tap }: { tap: Tap }) {
  return (
    <div className="container">
      <div className="bloco">
        <BeerPanel beer={tap.beer} torneira={tap.torneira} />
      </div>
    </div>
  );
}

export default Torneira;
