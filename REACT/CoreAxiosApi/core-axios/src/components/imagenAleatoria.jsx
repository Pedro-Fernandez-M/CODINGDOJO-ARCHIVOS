import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const ImagenAleatoria = () => {
  const [imagen, setImagen] = useState("");
  const [cargando, setCargando] = useState(false);

  const traeImagen = async () => {
    setCargando(true);
    try {
      const respuesta = await axios.get(
        "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=3"
      );
      setImagen(respuesta.data[0].url);
    } catch (error) {
      console.error("Error al obtener la imagen:", error);
      setImagen("Error al obtener la imagen. ");
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    traeImagen();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1> Imagen Aleatoria </h1>
      <button
        onClick={traeImagen}
        disabled={cargando}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        {cargando ? "Cargando..." : "Obtener Imagen"}
      </button>
      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        <img src={imagen} alt="Imagen Aleatoria" />
      </p>
    </div>
  );
};

export default ImagenAleatoria;
