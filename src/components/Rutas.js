import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Products from "./Products";
import Inicio from "./Inicio";
import Footer from "./Footer";
import Header from "./Header";
import Carrito from "./Carrito";
import CartProvider from "../components/Contex/CartContex";
import DogFood from "./DogFood";
import CatFood from './'

const Rutas = () => {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/catFood" element={<CatFood />} />
          <Route path="/dogFood" element={<DogFood />} />
          <Route path="/accesorios" element={<Accesorios />} />
            <Route path="/catFood" element={<Products direccion="Felinos" />} />
          <Route path="/dogFood" element={<Products direccion="Caninos" />} />
          <Route
            path="/accesorios"
            element={<Products direccion="Accesorios" />}
          />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
};

export default Rutas;
