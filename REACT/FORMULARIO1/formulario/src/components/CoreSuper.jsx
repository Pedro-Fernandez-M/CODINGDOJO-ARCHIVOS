import { useState } from "react";
import "./CoreSuper.css";

const CoreSuper = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [datos, setDatos] = useState([]);
  const [error, setError] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.length < 4 || apellido.length < 4) {
      setError("El nombre y apellido deben tener al menos 4 caracteres");
      return;
    }

    if (
      email.length < 10 ||
      email.indexOf("@") === -1 ||
      email.indexOf(".") === -1
    ) {
      setError("El email debe tener al menos 10 caracteres y contener @ y .");
      return;
    }

    if (password === "" || password2 === "") {
      setError("Ambos campos de password son obligatorios");
      return;
    }

    if (password !== password2) {
      setError("Las contraseñas no coinciden");
      return;
    }

    const nuevoDato = { nombre, apellido, email, password };
    setDatos([...datos, nuevoDato]);

    console.log("¡Formulario enviado correctamente!");
    console.log(nuevoDato);
    console.log(datos);
    setError("");
    setNombre("");
    setApellido("");
    setEmail("");
    setPassword("");
    setPassword2("");
  };

  return (
    <>
      <div className="container">
        <h1 className="titulo2">Registro Superhéroes</h1>
        <form onSubmit={handleSubmit} className="Formulario">
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <input
            type="text"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirmar Password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="Listado">
          <h2>Datos Registrados</h2>
          <br />
          <ul>
            {datos.map((dato, index) => (
              <li key={index}>
                {dato.nombre} {dato.apellido} - {dato.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CoreSuper;
