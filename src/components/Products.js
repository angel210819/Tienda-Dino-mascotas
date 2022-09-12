import axios from "axios";
import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import Cards from "./Cards";

const Products = (props) => {
  const [post, setPost] = useState([]);

  const obtenerDatos = async () => {
    try {
      const datos = await axios.get(`http://localhost:5000/${props.direccion}`);
      const comidas = await datos.data;
      setPost(comidas);
    } catch (error) {
      console.log("servidor caido");
    }
  };

  useEffect(() => {
    obtenerDatos();
    // eslint-disable-next-line
  }, [props.direccion]);

  return (
    <div>
      <Fragment>
        <br />
        <br />
        <Grid2
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 2, sm: 1, md: 5 }}
          justifyContent="center"
        >
          {post.length > 0 ? (
            post.map((comida) => {
              return (
                <Grid2 key={comida.id}>
                  <div>
                    <Cards
                      id={comida.id}
                      image={comida.img}
                      nombre={comida.nombre}
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

export default Products;
