import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Perros from "./Perros";
import Gatos from "./Gatos";
import Accesorios from "./Accesorios";
import Inicio from "./Inicio";
import Footer from "./Footer";
import Header from "./Header";
import Prueba from "./Prueba"

const Rutas = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/gatos" element={<Gatos />} />
        <Route path="/perros" element={<Perros />} />
        <Route path="/accesorios" element={<Accesorios />} />
        <Route path="/prueba" element={<Prueba />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Rutas;
