import * as React from "react";
import Grid from "@mui/material/Grid";
import paseo from "../images/serviciosCaninos/paseo.jpg";
import adiestramiento from "../images/serviciosCaninos/adiestramiento.jpg";
import Box from "@mui/material/Box";

const Services = () => {
  return (
    <>
      <Box>
        {/* Primer Grid secundario contenedor con imagen */}
        <Grid item xs={12} md={6} xl={6} mt={2} textAlign="center">
          <img
            alt="paseo de perros"
            src={paseo}
            width="65%"
            height="60%"
            style={{ cursor: "pointer", minWidth: "350px" }}
          />
        </Grid>
        {/* Segundo Grid secundario contenedor con imagen */}
        <Grid item xs={12} md={6} xl={6} mt={2} textAlign="center">
          <img
            alt="adiestramiento"
            src={adiestramiento}
            width="65%"
            height="60%"
            style={{ cursor: "pointer", minWidth: "350px" }}
          />
        </Grid>
      </Box>
    </>
  );
};
export default Services;
