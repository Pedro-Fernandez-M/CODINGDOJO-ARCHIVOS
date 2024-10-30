import express from "express";
import routerLibros from "./routes/books.routes.js";

const app = express();
const puerto = 8000;

app.use(express.json());

// Utilizar el enrutador de libros
app.use("/api", routerLibros);

app.listen(puerto, () => {
  console.log(`El servidor está corriendo en http://localhost:${puerto}`);
});
