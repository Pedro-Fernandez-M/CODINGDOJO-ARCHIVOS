import React, { useState } from "react";

const perro = {
  raza: "",
  tamaño: "",
  color: "",
  edad: "",
};

const Perrera = () => {
  const [edad, setEdad] = useState(0);

  return (
    <div>
      <h1>Edad del perro: {edad}</h1>
      <button onClick={() => setEdad(edad + 1)}>Sumar</button>
      <button onClick={() => setEdad(edad - 1)}>Restar</button>
    </div>
  );
};

export default Perrera;
