import MarcasDestacadas from "./marcasDestacadas/MarcasDestacadas";
import Detalle from "./barraInfo/Detalle";
import CallActions from "./CallActions";
import Services from "./Services";
import CarouselInstagram from "./carruselInstagram/CarouselInstagram";
import Slider from "./carousel/Slider";
import Box from "@mui/material/Box";

const Inicio = () => {
  return (
    <Box>
      <Slider />
      <MarcasDestacadas />
      <CallActions />
      <br />
      <br />

      <Box sx={{ display: { md: "flex" }, justifyContent: "space-around" }}>
        <CarouselInstagram />
        <Services />
      </Box>
      <Detalle />
    </Box>
  );
};

export default Inicio;
