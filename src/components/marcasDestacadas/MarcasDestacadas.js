import { Marcas } from "./Marcas";
import { CardActionArea, Grid } from "@mui/material";

const MarcasDestacadas = () => {
  return (
    <Grid padding="1rem" width="95%" mx="auto">
      <Grid
        container
        columns={{ xs: 2, sm: 3, md: 4 }}
        justifyContent="center"
        gap="60px"
      >
        {Marcas.map((item, index) => {
          return (
            <Grid className="borde" boxShadow={0} borderRadius={1} key={index}>
              <CardActionArea href={item.pagina} target="_blank">
                <img
                  height="80px"
                  width="110px"
                  src={item.imagen}
                  alt="marcas"
                />
              </CardActionArea>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default MarcasDestacadas;
