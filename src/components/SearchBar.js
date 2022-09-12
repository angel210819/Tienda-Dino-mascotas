import axios from "axios";
import { useState, useEffect } from "react";

const SearchBar = () => {
  const [productos, setProductos] = useState([]);

  const obtenerDatos = async () => {
    try {
      const datosCan = await axios.get(`http://localhost:5000/Caninos`);
      const infoCan = await datosCan.data;
      const datosFel = await axios.get(`http://localhost:5000/Felinos`);
      const infoFel = await datosFel.data;
      const datosAcc = await axios.get(`http://localhost:5000/Accesorios`);
      const infoAcc = await datosAcc.data;
      setProductos(infoCan.concat(infoFel).concat(infoAcc));
    } catch (error) {
      console.log("servidor caido");
    }
  };

  useEffect(() => {
    obtenerDatos();
    // eslint-disable-next-line
  }, []);
  console.log(productos);

  return "hola";
};

export default SearchBar;
