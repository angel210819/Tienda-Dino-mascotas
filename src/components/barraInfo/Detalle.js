import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { imagenesDetalles } from "./ImagenesDetalles";

const Detalle = () => {
  return (
    <Grid
      sx={{
        marginBottom: "30px",
        marginTop: "30px",
      }}
      container
      gap="10px"
      paddingLeft={3}
    >
      {imagenesDetalles.map((item, id) => {
        return (
          <Grid
            key={id}
            mx="auto"
            display="flex"
            alignItems="center"
            item
            xs={9}
            md={10}
            xl={3}
          >
            <img height="50px" src={item.image} alt="detalles de politica" />
            <Box paddingLeft={5}>
              <Typography variant="h5">{item.title}</Typography>
              <Typography variant="p"> {item.text} </Typography>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Detalle;
