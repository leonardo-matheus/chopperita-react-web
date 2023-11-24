import React from "react";

interface CatCircleProps {
  beer: {
    abu_bitterness: string;
  };
}

const CatCircle: React.FC<CatCircleProps> = ({ beer }) => {
  const imageMapping: Record<string, string> = {
    "0": "img/0.svg",
    "1": "img/1.svg",
    // Adicione outras entradas conforme necessário
  };

  return (
    <div className="cat-itens-section">
      <span>Amargor </span>
      <img className="circulosIcon" src={imageMapping[beer.abu_bitterness]} alt="Amargor" />
    </div>
  );
};

export default CatCircle;
