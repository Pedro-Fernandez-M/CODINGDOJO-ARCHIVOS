const manejoDeErrores = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: "Algo salió mal!" });
};

module.exports = manejoDeErrores;
