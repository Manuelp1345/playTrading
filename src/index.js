import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataProvider } from "./modules/context/DataContext";
import TradingBot from "./modules/TradingBot";
import QuienesSomos from "./modules/QuienesSomos";
import Team from "./modules/Team";
import Goles from "./modules/Goles";
import GanaSinEmpate from "./modules/GanasinEmpate";
import Favoritos from "./modules/Favoritos";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/trading-bot" element={<TradingBot />} />
          <Route path="/team" element={<Team />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/goles" element={<Goles />} />
          <Route path="/gana-sin-empate" element={<GanaSinEmpate />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  </React.StrictMode>
);
