import React from "react";
import MarcasDestacadas from "./MarcasDestacadas";
import Detalle from "./Detalle";
import CallActions from "./CallActions";
import Services from "./Services";
import CarouselInstagram from "./CarouselInstagram";
import Slider from "./carousel/Slider";
import Box from '@mui/material/Box';

const Inicio = () => {
  return (
    <div>
      <Slider />
      <MarcasDestacadas />
      <CallActions />
      <Detalle />
      <Box sx={{ display: { md: "flex" }, justifyContent: "space-around"}}>
      <CarouselInstagram/>
      <Services />
      </Box>
    </div>
  );
};

export default Inicio;
