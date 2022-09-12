import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import paseo from "../images/serviciosCaninos/paseo.jpg";
import adiestramiento from "../images/serviciosCaninos/adiestramiento.jpg";

export default function Services() {
  return (
    // Contenedor principal
    <>
      <Grid>
        <Typography variant="h4" color="primary">
          Servicios Caninos
        </Typography>
      </Grid>

      {/* <hr/> */}
      <Divider variant="middle" />
      <br />

      <Grid container padding=".5rem" justifyContent="space-around" ml={6}>
        {/* Primer Grid secundario contenedor con imagen */}
        <Grid item xs={12} md={6} xl={6}>
          <img
            alt="paseo de perros"
            src={paseo}
            width="80%"
            height="100%"
            style={{ cursor: "pointer" }}
          />
        </Grid>

        {/* Segundo Grid secundario contenedor con imagen */}
        <Grid item xs={12} md={6} xl={6}>
          <img
            alt="adiestramiento"
            src={adiestramiento}
            width="80%"
            height="100%"
            style={{ cursor: "pointer" }}
          />
        </Grid>
      </Grid>
    </>
  );
}
