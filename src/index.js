import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter, Route, Routes } from "react-router-dom";
import { DataProvider } from "./modules/context/DataContext";
import TradingBot from "./modules/TradingBot";
import QuienesSomos from "./modules/QuienesSomos";
import Team from "./modules/Team";
import Goles from "./modules/Goles";
import GanaSinEmpate from "./modules/GanasinEmpate";
import Favoritos from "./modules/Favoritos";
import "./index.css";
import HFA from "./modules/HFA";
import HGA from "./modules/HGA";
import HGO from "./modules/HGo";
import Contacto from "./contacto";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <DataProvider>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/trading-bot" element={<TradingBot />} />
          <Route path="/team" element={<Team />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/goles" element={<Goles />} />
          <Route path="/gana-sin-empate" element={<GanaSinEmpate />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/HFA" element={<HFA />} />
          <Route path="/HGA" element={<HGA />} />
          <Route path="/HGO" element={<HGO />} />
          <Route path="/contact" element={<Contacto />} />
        </Routes>
      </HashRouter>
    </DataProvider>
  </React.StrictMode>
);
