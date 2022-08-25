import axios from "axios";
import React, { useState, useEffect } from "react";

const Prueba = () => {
  const [post, setPost] = useState([]);

  const obtenerDatos = async () => {
    const datos = await axios.get("http://localhost:5000/Felinos");
    const comidas = await datos.data;
    setPost(comidas);
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <div>
      {post.length > 0 ? (
        post.map((comida, i) => (
          <div key={comida.id}>
            <h1>{comida.marca}</h1>
            <img src={comida.img} alt={comida.nombre} />
            <h6> Nombre: {comida.nombre}</h6>
            <p>{comida.descripcion}</p>
          </div>
        ))
      ) : (
        <h1>No hay alimento, el bicho se va a cagar de hambre</h1>
      )}
    </div>
  );
};

export default Prueba;
