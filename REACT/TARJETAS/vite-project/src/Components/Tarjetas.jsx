import React, { useState } from "react";

import "./StylesTarjetas.css";
const Tarjetas = () => {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [datos, setDatos] = useState([]);
  const [borderWidth, setBorderWidth] = useState(1);
  const [colorFondo, setColorFondo] = useState("#ffffff");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaTarjeta = { titulo, contenido };
    setDatos([...datos, nuevaTarjeta]);
    setTitulo("");
    setContenido("");
  };

  const EliminarCard = (index) => {
    const nuevaLista = datos.filter((_, i) => i !== index);
    setDatos(nuevaLista);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <input
            type="text"
            placeholder="Contenido"
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
          />
          <button type="submit">Enviar</button>

          <div className="slider-container">
            <label htmlFor="borderWidthSlider">
              Ancho del borde: {borderWidth}px
            </label>
            <input
              id="borderWidthSlider"
              type="range"
              min="1"
              max="10"
              value={borderWidth}
              onChange={(e) => setBorderWidth(e.target.value)}
            />
          </div>
          <div className="Color-Fondo">
            <label htmlFor="ColorFondo">Color de Fondo</label>
            <input
              type="color"
              id="ColorFondo"
              value={colorFondo}
              onChange={(e) => setColorFondo(e.target.value)}
            />
          </div>
        </form>

        <div className="tarjetas">
          {datos.map((tarjeta, index) => (
            <div
              key={index}
              className="tarjeta"
              style={{
                borderWidth: `${borderWidth}px`,
                borderStyle: "solid",
                backgroundColor: `${colorFondo}`,
              }}
            >
              <h3>{tarjeta.titulo}</h3>
              <p>{tarjeta.contenido}</p>
              <button onClick={() => EliminarCard(index)}>Eliminar</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tarjetas;
