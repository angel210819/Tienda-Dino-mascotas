import { Marcas } from "./Marcas";
import { CardActionArea, Grid } from "@mui/material";

const MarcasDestacadas = () => {
  return (
    <Grid padding="1rem" width="98%" mx="auto">
      <Grid
        container
        columns={{ xs: 2, sm: 3, md: 4 }}
        justifyContent="center"
        gap="60px"
      >
        {Marcas.map((item, index) => {
          return (
            <Grid className="borde" boxShadow={0} borderRadius={1} key={index}>
              <CardActionArea>
                <img
                  height="80px"
                  width="85px"
                  src={item.titulo}
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
