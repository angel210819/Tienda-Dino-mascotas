import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Products from "./Products";
import Inicio from "./Inicio";
import Footer from "./Footer";
import Header from "./Header";

import Carrito from "./Carrito";

import CartProvider from "../components/Contex/CartContex";
import SearchBar from "./barraBusqueda/SearchBar";

import { ThemeProvider } from '@mui/material/styles';
import theme from '../components/ThemeGlobal'
import SobreNosotros from './sobreNosotros/SobreNosotros'

const Rutas = () => {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/catFood" element={<Products direccion="Felinos" />} />
          <Route path="/dogFood" element={<Products direccion="Caninos" />} />
          <Route
            path="/accesorios"
            element={<Products direccion="Accesorios" />}
          />
          <Route path= "/sobreNosotros" element={<SobreNosotros />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/busqueda" element={<SearchBar />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
    </ThemeProvider>
  );
};

export default Rutas;
