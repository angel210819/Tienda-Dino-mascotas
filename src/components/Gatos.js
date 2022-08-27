import axios from "axios";
import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import Cards from "./Cards";

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
      <Fragment>
        <br />
        <br />
        <Grid2
          container
          spacing={{ xs: 10, md: 4 }}
          columns={{ xs: 5, sm: 1, md: 20 }}
          justifyContent="center"
        >
          {post.length > 0 ? (
            post.map((comida) => {
              return (
                <Grid2>
                  <div>
                    <Cards
                      key={comida.id}
                      title={comida.marca}
                      image={comida.img}
                      contenido={comida.nombre}
                      peso={comida.peso}
                      precio={comida.precio}
                      descripcion={comida.descripcion}
                    />
                  </div>
                </Grid2>
              );
            })
          ) : (
            <h1>Sin existencias</h1>
          )}
        </Grid2>
      </Fragment>
    </div>
  );
};

export default Prueba;
