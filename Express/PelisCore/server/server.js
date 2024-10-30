import express from "express";
import routerPeliculas from "./routes/Pelis.routes.js";

const app = express();
const port = 8080;

app.use(express.json());
app.use("/api", routerPeliculas);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
