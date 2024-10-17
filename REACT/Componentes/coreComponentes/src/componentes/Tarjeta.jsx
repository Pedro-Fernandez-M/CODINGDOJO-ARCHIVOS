import "./Tarjeta.css";

const Tarjeta = (props) => {
  const handleEliminarStock = () => {
    if (props.stock > 1) {
      props.actualizarStock(props.stock - 1);
    } else if (props.stock === 1 || props.stock === 0) {
      props.actualizarStock("Agotado");
      const EliminarID = document.getElementById("SSS");
      EliminarID.remove();
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.nombre}</h5>
        <h3 className="card-subtitle mb-2 text-body-secondary">
          {props.precio}
        </h3>
        <p className="card-text">{props.Texto}</p>
        <div className="card-text flex-row">
          <p className="card-text" id="SSS">
            En Stock
          </p>
          <p style={{ color: props.stock === "Agotado" ? "red" : "green" }}>
            {props.stock}
          </p>

          <button className="btn btn-primary" onClick={handleEliminarStock}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tarjeta;
