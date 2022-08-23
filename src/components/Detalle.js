import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

const imagenesDetalles = [
  {
    id: 1,
    title: "Compra segura",
    text: "Gestionamos tus datos de absoluta confidencialidad",
    image:
      "https://petplanetshop.com.ar/images/link_column_image/1?w=100&h=93&fit=crop&dpr=1&q=80",
  },
  {
    id: 2,
    title: "MEDIOS DE PAGO",
    text: "Aceptamos pagos en efectivo y con tarjetas a traves de Mercado Pago",
    image:
      "https://petplanetshop.com.ar/images/link_column_image/2?w=100&h=93&fit=crop&dpr=1&q=80",
  },
  {
    id: 3,
    title: "ENVIOS SIN CARGO",
    text:
      "Comprando el monto minimo tenes el delivery gratis, si vivis hasta 6km de cada sucursal",
    image:
      "https://petplanetshop.com.ar/images/link_column_image/3?w=100&h=93&fit=crop&dpr=1&q=80",
  },
];

const Detalle = () => {
  return (
    <Grid
      sx={{
        backgroundColor: "#DEF7FA",
        marginBottom: "30px",
        marginTop: "30px",
      }}
      container
      gap="10px"
      paddingLeft={3}
    >
      {imagenesDetalles.map((item, id) => {
        return (
          <Box
            key={id}
            paddingLeft="10px"
            padding="15px"
            display="flex"
            alignItems="center"
            container
          >
            <img height="50px" src={item.image} alt="detalles de politica" />
            <Box paddingLeft={5}
            >
              <Typography variant="h5">{item.title}</Typography>
              <Typography variant="p"> {item.text} </Typography>
            </Box>
          </Box>
        );
      })}
    </Grid>
  );
};

export default Detalle;
