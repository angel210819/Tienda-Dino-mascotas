import React from "react";
import MarcasDestacadas from "./MarcasDestacadas";
import Detalle from "./Detalle";
import CallActions from "./CallActions";
import CarInst from "./CarInst";

const Inicio = () => {
  return (
    <div>
      <MarcasDestacadas />
      <CallActions/>
      <Detalle />
      <CarInst />
    </div>
  );
};

export default Inicio;
