import { useState } from "react";
import "./App.css";

function App() {
  const mascotaInicial = {
    nombre: "",
    tipo: "",
    raza: "",
    edad: "",
  };

  const [mascota, setMascota] = useState(mascotaInicial);
  const [registro, setRegistro] = useState([]);

  const handleChange = (event) => {
    // console.log(event);
    const { name, value } = event.target;

    setMascota({ ...mascota, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setRegistro([...registro, mascota]);
    console.log(registro);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="nombre">
          <input
            type="text"
            placeholder="Nombre"
            name="nombre"
            onChange={(e) => handleChange(e)}
            value={mascota.nombre}
          />
        </label>
        <label htmlFor="tipo">
          <input
            type="text"
            placeholder="tipo"
            name="tipo"
            onChange={(e) => handleChange(e)}
            value={mascota.tipo}
          />
        </label>

        <label htmlFor="raza">
          <input
            type="text"
            placeholder="raza"
            name="raza"
            onChange={(e) => handleChange(e)}
            value={mascota.raza}
          />
        </label>
        <label htmlFor="edad">
          <input
            type="number"
            placeholder="edad"
            name="edad"
            onChange={(e) => handleChange(e)}
            value={mascota.edad}
          />
        </label>

        <button type="Submit">Cargar</button>
      </form>

      <div>
        {registro.map((mascota) => (
          <div>
            <h1>{mascota.nombre}</h1>
            <h1>{mascota.tipo}</h1>
            <h1>{mascota.raza}</h1>
            <h1>{mascota.edad}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

// const manejarEnvio = (envio) => {
//   envio.preventDefault();
//   setFormulario(formularioInicial);
//   setRegistro([...registro, formulario]);
//   console.log(registro);
// }
