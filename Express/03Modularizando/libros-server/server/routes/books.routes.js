import { Router } from "express";

const router = Router();

const libros = [
  { id: 1, titulo: "El Último Deseo", autor: "Andrzej Sapkowski" },
  { id: 2, titulo: "La Espada del Destino", autor: "Andrzej Sapkowski" },
  { id: 3, titulo: "La Sangre de los Elfos", autor: "Andrzej Sapkowski" },
  { id: 4, titulo: "Tiempo de Desprecio", autor: "Andrzej Sapkowski" },
  { id: 5, titulo: "Bautismo de Fuego", autor: "Andrzej Sapkowski" },
  { id: 6, titulo: "La Torre de la Golondrina", autor: "Andrzej Sapkowski" },
  { id: 7, titulo: "La Dama del Lago", autor: "Andrzej Sapkowski" },
  { id: 8, titulo: "Estación de Tormentas", autor: "Andrzej Sapkowski" },
];

router
  .route("/libros")
  .get((req, res) => {
    res.json(libros);
  })
  .post((req, res) => {
    const nuevoLibro = req.body;
    libros.push(nuevoLibro);
    res.json(nuevoLibro);
  });

router
  .route("/libros/:id")
  .get((req, res) => {
    const libro = libros.find((l) => l.id == req.params.id);
    res.json(libro);
  })
  .put((req, res) => {
    const id = req.params.id;
    const libroActualizado = req.body;
    const index = libros.findIndex((l) => l.id == id);
    libros[index] = { ...libros[index], ...libroActualizado };
    res.json(libros[index]);
  })
  .delete((req, res) => {
    const id = req.params.id;
    const index = libros.findIndex((l) => l.id == id);
    libros.splice(index, 1);
    res.json(libros);
  });

export default router;
