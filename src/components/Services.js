import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import paseo from "../images/serviciosCaninos/paseo.jpg";
import adiestramiento from "../images/serviciosCaninos/adiestramiento.jpg";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'; 

export default function Services() {
  return (
    // Contenedor principal
    <>
   

      {/* <hr/> */}


     <Box>
        {/* Primer Grid secundario contenedor con imagen */}
        <Grid item xs={12} md={6} xl={6} mt={2} textAlign="center">
          <img
            alt="paseo de perros"
            src={paseo}
            width="65%"
            minWidth="50%"
            height="60%"
            style={{ cursor: "pointer" }}
          />
        </Grid>

        {/* Segundo Grid secundario contenedor con imagen */}
        <Grid item xs={12} md={6} xl={6} mt={2} textAlign="center">
          <img
            alt="adiestramiento"
            src={adiestramiento}
            width="65%"
            minWidth="50%"
            height="60%"
            style={{ cursor: "pointer" }}
          />
        </Grid>
      </Box>
    </>
  );
}
