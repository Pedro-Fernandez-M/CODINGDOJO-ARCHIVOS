import React from "react";
import { Link } from "react-router-dom";

import styles from "./menu.module.css";

function Menu() {
  return (
    <div>
      <nav>
        <h1 className={styles.tituloMenu}>
          Bienvenido a la Galería de arte Futurista
        </h1>
        <ul className={styles.listaMenu}>
          <li>
            <Link to="/fuera_de_este_mundo">Fuera de este mundo</Link>
          </li>
          <li>
            <Link to="/pacientes_holograficos">Pacientes Holográficos</Link>
          </li>
          <li>
            <Link to="/lo_alto_del_dinero">Lo alto del Dinero</Link>
          </li>
          <li>
            <Link to="/nada_como_la_privacidad_del_hogar">
              Nada como la privacidad del Hogar
            </Link>
          </li>
          <li>
            <Link to="/moverse_en_la_ciudad">Moverse en la Ciudad</Link>
          </li>
          <li>
            <Link to="/diversion_en_otro_planeta">
              Diversión en Otro Planeta
            </Link>
          </li>
          <li>
            <Link to="/espectaculo_de_la_galaxia">
              Espectáculo de la Galaxia
            </Link>
          </li>
          <li>
            <Link to="/taxistas">Taxistas</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
