import { useState } from "react";
import style from "./coreCoreFormulario.css";

const coreFormulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={style.formulario}>
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
        value={Email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Enviar</button>
    </div>
  );
};

export default coreFormulario;
