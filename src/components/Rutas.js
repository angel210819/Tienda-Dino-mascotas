import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import DogFood from "./DogFood";
import CatFood from "./CatFood";
import Accesorios from "./Accesorios";
import Inicio from "./Inicio";
import Footer from "./Footer";
import Header from "./Header";

const Rutas = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/catFood" element={<CatFood />} />
        <Route path="/dogFood" element={<DogFood />} />
        <Route path="/accesorios" element={<Accesorios />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Rutas;
