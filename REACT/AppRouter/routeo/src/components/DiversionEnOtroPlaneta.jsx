import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const DiversionEnOtroPlaneta = () => {
  const [imagen, setImagen] = useState("");

  const traeImagen = async () => {
    try {
      const respuesta = await axios.get(
        "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=3"
      );
      setImagen(respuesta.data[0].url);
    } catch (error) {
      console.error("Error al obtener la imagen:", error);
      setImagen("Error al obtener la imagen. ");
    }
  };

  useEffect(() => {
    traeImagen();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1> Fuera De este Mundo </h1>

      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        <img src={imagen} alt="Imagen Aleatoria" />
      </p>
      <Link to="../moverse_en_la_ciudad">
        <button>Atras</button>
      </Link>
      <Link to="/">
        <button>menu</button>
      </Link>
      <Link to="../espectaculo_de_la_galaxia">
        <button>Adelante</button>
      </Link>
    </div>
  );
};

export default DiversionEnOtroPlaneta;