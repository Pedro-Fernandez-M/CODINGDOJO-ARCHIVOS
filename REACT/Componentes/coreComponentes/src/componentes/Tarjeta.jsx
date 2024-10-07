import React, { useState } from "react";
import "./tarjeta.css";

const Tarjeta = (props) => {
  const Componente = () => {
    const [cantidad, setCantidad] = useState(0);
    const { nombre, precio, Texto, stock } = props;

    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <h3 className="card-subtitle mb-2 text-body-secondary">{precio}</h3>
          <p className="card-text">{Texto}</p>
          <div className="card-text flex-row">
            <p className="card-text">En Stock</p>
            <p style={{ color: stock === "Agotado" ? "red" : "green" }}>
              {stock}
            </p>
            <button className="btn btn-primary">Comprar</button>
          </div>
        </div>
      </div>
    );
  };

  return <Componente {...props} />;
};

export default Tarjeta;
