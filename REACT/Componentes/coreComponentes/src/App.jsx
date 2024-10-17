import React, { useState } from "react";
import Tarjeta from "./componentes/Tarjeta";
import "./App.css";

const App = () => {
  const [productos, setProductos] = useState([
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
      stock: "Agotado",
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
  ]);

  const actualizarStock = (producto, nuevoStock) => {
    const productosActualizados = productos.map((p) => {
      if (p.nombre === producto.nombre) {
        return { ...p, stock: nuevoStock };
      }
      return p;
    });
    setProductos(productosActualizados);
  };

  return (
    <>
      <h1> TechStore - Tu destino para la mejor Tecnología</h1>

      <div className="contenedor">
        {productos.map((producto, index) => (
          <Tarjeta
            key={index}
            nombre={producto.nombre}
            precio={producto.precio}
            Texto={producto.Texto}
            stock={producto.stock}
            actualizarStock={(nuevoStock) =>
              actualizarStock(producto, nuevoStock)
            }
          />
        ))}
      </div>
    </>
  );
};

export default App;
