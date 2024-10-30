import React, { useState } from "react";
import "./Style.AppNotas.css";

const AppNotas = () => {
  const [notas, setNotas] = useState([]);
  const [nota, setNota] = useState("");
  const [calificacion, setCalificacion] = useState("Alta");
  const [filtro, setFiltro] = useState("TODAS");

  const agregarNota = (e) => {
    e.preventDefault();
    setNotas([...notas, { nota, calificacion }]);
    setNota("");
    setCalificacion("Alta");
    console.log(notas);
  };

  const NotasFiltradas = notas.filter((item) => {
    if (filtro === "TODAS") {
      return item;
    } else if (filtro === "ALTAS") {
      return item.calificacion === "Alta";
    } else if (filtro === "BAJAS") {
      return item.calificacion === "Baja";
    }
  });

  const EliminarNota = (index) => {
    const newNotas = [...notas];
    newNotas.splice(index, 1);
    setNotas(newNotas);
  };

  return (
    <div className="contenedor">
      <form onSubmit={agregarNota} className="form">
        <h1 className="Titulo">Notas</h1>
        <input
          type="text"
          placeholder="Escribe tu Nota"
          value={nota}
          onChange={(e) => setNota(e.target.value)}
        />
        <br />
        <select
          name="Calificacion"
          id="Calificacion"
          value={calificacion}
          onChange={(e) => setCalificacion(e.target.value)}
        >
          <option value="Alta">Alta</option>
          <option value="Baja">Baja</option>
        </select>
        <br />
        <button className="Adicionar" type="submit">
          Agregar Nota
        </button>
        <br />

        <select
          name="Clasificar"
          id="Clasificar"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        >
          <option value="TODAS">TODAS</option>
          <option value="ALTAS">ALTAS</option>
          <option value="BAJAS">BAJAS</option>
        </select>
      </form>
      <br />
      <div>
        {NotasFiltradas.map((item, index) => (
          <div key={index}>
            <p>Nota: {item.nota}</p>
            <p>Calificación: {item.calificacion}</p>
            <button
              className="botonEliminar"
              onClick={() => {
                EliminarNota(index);
              }}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppNotas;
