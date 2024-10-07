import React from "react";
import Tarjeta from "./componentes/tarjeta";
import "./App.css";

const App = () => {
  const productos = [
    {
      nombre: "Laptop",
      precio: 1500,
      Texto: "Una potente laptop para trabajar y jugar ",
      stock: 10,
    },
    {
      nombre: "Smartphone",
      precio: 800,
      Texto: "Un smartphone de última generacion",
      stock: 0,
    },
    {
      nombre: "Auriculares",
      precio: 200,
      Texto: "Auriculares con cancelación de ruido",
      stock: 5,
    },
    {
      nombre: "Monitor",
      precio: 300,
      Texto: "Monitor 4K para una experiencia visual increible",
      stock: 7,
    },
  ];

  return (
    <div className="App">
      {productos.map((producto) => (
        <Tarjeta key={producto.nombre} {...producto} />
      ))}
    </div>
  );
};

export default App;
