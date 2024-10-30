import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FueraDeEsteMundo from "./components/FueraDeEsteMundo.jsx";
import PacientesHolograficos from "./components/PacientesHolograficos.jsx";
import LoAltoDelDinero from "./components/LoAltoDelDinero.jsx";
import NadaComoLaPrivacidadDelHogar from "./components/NadaComoLaPrivacidadDelHogar.jsx";
import MoverseEnLaCiudad from "./components/MoverseEnLaCiudad.jsx";
import DiversionEnOtroPlaneta from "./components/DiversionEnOtroPlaneta.jsx";
import EspectaculoDeLaGalaxia from "./components/EspectaculoDeLaGalaxia.jsx";
import Taxistas from "./components/Taxistas.jsx";
import Menu from "./components/menu.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Menu />} />

          <Route path="/fuera_de_este_mundo" element={<FueraDeEsteMundo />} />
          <Route
            path="/pacientes_holograficos"
            element={<PacientesHolograficos />}
          />
          <Route path="/lo_alto_del_dinero" element={<LoAltoDelDinero />} />
          <Route
            path="/nada_como_la_privacidad_del_hogar"
            element={<NadaComoLaPrivacidadDelHogar />}
          />
          <Route path="/moverse_en_la_ciudad" element={<MoverseEnLaCiudad />} />
          <Route
            path="/diversion_en_otro_planeta"
            element={<DiversionEnOtroPlaneta />}
          />
          <Route
            path="/espectaculo_de_la_galaxia"
            element={<EspectaculoDeLaGalaxia />}
          />
          <Route path="/taxistas" element={<Taxistas />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
