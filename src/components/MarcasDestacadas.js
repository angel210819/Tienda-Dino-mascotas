import React from "react";
import { Marcas } from "../enlaceDeMarca/Marcas";
import { CardActionArea, Grid } from "@mui/material";

const MarcasDestacadas = () => {
  return (
    <Grid spacing={2} padding="1rem">
      <Grid
        container
        columns={{ xs: 2, sm: 3, md: 4 }}
        justifyContent="center"
        gap='5px'
      >
        {Marcas.map((item, index) => {
          return (
            <Grid
              hover
              className="borde"
              boxShadow={3}
              borderRadius={1}
              key={index}
            >
              <CardActionArea>
                <img
                  height="100px"
                  width="90%"
                  src={item.titulo}
                  alt="marcas"
                />
              </CardActionArea>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default MarcasDestacadas;
