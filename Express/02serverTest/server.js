import express from "express";
import { Router } from "express";
import archivos from "./routes/routes.libros.js";

const app = express();
const puerto = 8080;

app.use(express.json());

app.use("/api/libros", archivos);

app.listen(puerto, () => {
  console.log(`Servidor está corriendo en http://localhost:${puerto}`);
});
