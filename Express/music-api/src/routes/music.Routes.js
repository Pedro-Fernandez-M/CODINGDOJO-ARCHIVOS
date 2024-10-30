import express from "express";
const router = express.Router();
const {
  obtenerCancion,
  obtenerPlaylist,
} = require("../controllers/musicController");

router.get("/cancion", obtenerCancion);
router.get("/playlist", obtenerPlaylist);

module.exports = router;
