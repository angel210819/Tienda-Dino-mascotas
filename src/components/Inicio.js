import React from "react";
import MarcasDestacadas from "./MarcasDestacadas";
import Detalle from "./Detalle";
import CallActions from "./CallActions";
import Services from "./Services";
import CarInst from "./CarInst";
import Slider from "./carousel/Slider";

const Inicio = () => {
  return (
    <div>
      <Slider />
      <MarcasDestacadas />
      <CallActions/>
      <Detalle />
      <CarInst />
      <Services/>
    </div>
  );
};

export default Inicio;
