import express from "express";
const app = express();
const port = 8080;
const musicRoutes = require("./routes/musicRoutes");
const manejoDeErrores = require("./middlewares/manejoDeErrores");

app.use(express.json());
app.use("/api/music", musicRoutes);
app.use(manejoDeErrores);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
