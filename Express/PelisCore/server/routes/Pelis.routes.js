import { Router } from "express";
import ControladorPeliculas from "../controllers/Pelis.controller.js";

const router = Router();

router
  .route("/movies")
  .get(ControladorPeliculas.obtenerTodasLasPeliculas)
  .post(ControladorPeliculas.crearPelicula);

router
  .route("/movies/year/:year")
  .get(ControladorPeliculas.obtenerPeliculasPorAño);

router
  .route("/movies/delete/:title")
  .delete(ControladorPeliculas.eliminarPelicula);

router
  .route("/movies/update/:title")
  .patch(ControladorPeliculas.actualizarstarringPelicula);

export default router;
