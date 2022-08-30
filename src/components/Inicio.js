import React from "react";
import MarcasDestacadas from "./MarcasDestacadas";
import Detalle from "./Detalle";
import CallActions from "./CallActions";
import CarInst from "./CarInst";
import Slider from "./Slider";

const Inicio = () => {
  return (
    <div>
      <Slider />
      <MarcasDestacadas />
      <CallActions/>
      <Detalle />
      <CarInst />
    </div>
  );
};

export default Inicio;
