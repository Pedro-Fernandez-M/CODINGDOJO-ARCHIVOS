import { useState } from "react";
import axios from "axios";

const Foto = () => {
  const [fotoGato, setFotoGato] = useState("");
  const [cargando, setCargando] = useState(false);

  const obtenerFoto = async () => {
    setCargando(true);
    try {
      const respuesta = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=3"
      );
      const datos = await respuesta.json();
      setFotoGato(datos[0].url);
    } catch (error) {
      console.error("Error al obtener la foto:", error);
      setFotoGato("Error al obtener la foto. ");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1> Api Aleatoria </h1>
      <button
        onClick={obtenerFoto}
        disabled={cargando}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        {cargando ? "Cargando..." : "Obtener Foto"}
      </button>
      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        <img src={fotoGato} alt="Foto de un gatito" />
      </p>
    </div>
  );
};

export default Foto;
