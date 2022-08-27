import axios from "axios";
import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import Grid2 from '@mui/material/Unstable_Grid2'
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
        <Grid2
          container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {post.length > 0 ? (
            post.map((comida, i) => {
              return (
                <Grid2 xs={2}>
                <div>
                  <Cards
                    key={comida.id}
                    titlo={comida.marca}
                    image={comida.img}
                    contenido={comida.nombre}
                    peso={comida.peso}
                    precio={comida.precio}
                    descripcion={comida.descripcion}
                  />
                </div>
                </Grid2>
              ) ;
            })
          ) : (
            <h1>No hay alimento, el bicho se va a cagar de hambre</h1>
          )}
          
        </Grid2>
      </Fragment>
    </div>
  );
};

export default Prueba;
