onst manejoDeErrores = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Algo salió mal!' });
 };
 
 module.exports = manejoDeErrores;
  // En tu archivo principal (e.g., app.js)
 const manejoDeErrores = require('./middlewares/manejoDeErrores');
 
 app.use(errorHandler);