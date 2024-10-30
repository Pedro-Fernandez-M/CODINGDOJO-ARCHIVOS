import { Router } from "express";

const archivos = Router();

const libros = [
  { id: 1, titulo: "El Último Deseo", autor: "Andrzej Sapkowski" },
  { id: 1, titulo: "La Espada del Destino", autor: "Andrzej Sapkowski" },
  { id: 2, titulo: "La Sangre de los Elfos", autor: "Andrzej Sapkowski" },
  { id: 2, titulo: "Tiempo de Odio", autor: "Andrzej Sapkowski" },
  { id: 3, titulo: "Bautismo de Fuego", autor: "Andrzej Sapkowski" },
  { id: 3, titulo: "La Torre de la Golondrina", autor: "Andrzej Sapkowski" },
  { id: 3, titulo: "La Dama del Lago", autor: "Andrzej Sapkowski" },
  { id: 4, titulo: "Estación de Tormentas", autor: "Andrzej Sapkowski" },
];

archivos.get("/", (req, res) => {
  res.json(libros);
});

archivos.get("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const libro = libros.find((libro) => libro.id === id);
  res.json(libro);
});

archivos.get("/buscar/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const libro = libros.filter((libro) => libro.id === id);
  res.json(libro);
});

archivos.put("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const datosActualizados = req.body;
  const indiceLibro = libros.findIndex((libro) => libro.id === id);
  libros[indiceLibro] = { id, ...datosActualizados };
  res.json(libros[indiceLibro]);
});

archivos.patch("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const datosActualizados = req.body;
  const indiceLibro = libros.findIndex((libro) => libro.id === id);
  libros[indiceLibro] = { ...libros[indiceLibro], ...datosActualizados };
  res.json(libros[indiceLibro]);
});

archivos.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const indiceLibro = libros.findIndex((libro) => libro.id === id);
  libros.splice(indiceLibro, 1);
  res.json({ mensaje: "Libro eliminado" });
});

export default archivos;
