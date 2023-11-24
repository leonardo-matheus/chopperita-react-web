function CorCerveja({beer}) {

    const corDaCerveja = beer.coloring;
    const colorStyle = {
        backgroundColor: corDaCerveja,
    };

    return (
         <div className="corCerveja">
             <div className="corCervejaInterno" style={colorStyle}></div>
         </div>
    );
}

export default CorCerveja;