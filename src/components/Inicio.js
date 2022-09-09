import React from "react";
import MarcasDestacadas from "./MarcasDestacadas";
import Detalle from "./Detalle";
import CallActions from "./CallActions";
import Services from "./Services";
import CarInst from "./CarInst";



const Inicio = () => {
  return (
    <div>
      <MarcasDestacadas />
      <CallActions/>
      <Detalle />
      <CarInst />
      <Services/>
    </div>
  );
};

export default Inicio;
