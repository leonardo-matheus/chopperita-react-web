import React from "react";

const CatCircle = ({ beer }) => {

    const imageMapping = {
        0: "img/0.svg",
        1: "img/1.svg", 
        2: "img/2.svg",
        3: "img/3.svg",
        4: "img/4.svg",
        5: "img/5.svg",
        6: "img/6.svg",
    };

    if (beer.abu_bitterness >= 0 && beer.abu_bitterness <=6)

    return (
        <div className="cat-itens">
            <div className="cat-itens-section">
                <span>Amargor  </span>
                <img className="circulosIcon" src={imageMapping[beer.abu_bitterness]}></img>
            </div>
        </div>
    );
}

export default CatCircle;