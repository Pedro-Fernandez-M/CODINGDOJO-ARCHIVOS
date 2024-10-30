import express from "express";
const app = express();
const port = process.env.PORT || 8080;

const personajes = [
  { nombre: "Luke", apellido: "Skywalker", id: 1001 },
  { nombre: "Leia", apellido: "Organa", id: 1002 },
  { nombre: "Han", apellido: "Solo", id: 1003 },
  { nombre: "Chewbacca", apellido: "Wookiee", id: 1004 },
  { nombre: "Darth", apellido: "Vader", id: 1005 },
];

app.get("/personajes", (req, res) => {
  return res.status(200).json(personajes);
});

app.listen(port, () => {
  console.log(`el servidor esta fucion ando en el puerto..... ${port}`);
});
