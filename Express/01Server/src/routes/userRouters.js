import express from "express";
const {
  getUsuarios,
  crearUsuario,
} = require("../controllers/controladorUsuario");
const router = express.Router();

router.get("/", getUsuarios);
router.post("/", crearUsuario);

module.exports = router;
