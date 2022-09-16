import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@mui/material";

import imgCats from "../images/Cats.jpg";
import imgDogs from "../images/Dogs.jpg";
import imgVet from "../images/Veterinary.jpg";

const CallActions = () => {
  return (
    <Grid
      container
      justifyContent="space-around"
      spacing={2}
      mx="auto"
      width="95%"
    >
      <Grid item xs={10} md={4} xl={4}>
        <Card>
          <CardMedia component="img" alt="Gatos" height="140" image={imgCats} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Club de Descuentos
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Incribetete aqui para acceder a nuestros descuentos y beneficios
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="secondary" size="small">
              Accede Aqui
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={10} md={4} xl={4}>
        <Card>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={imgDogs}
            xs={6}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Fundación de Protección Animal
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Ingresa aqui y conoceras todas las iniciativas de la Fundación
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="secondary" size="small">
              Accede Aqui
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={10} md={4} xl={4}>
        <Card>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={imgVet}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Red Veterinaria
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Conoce el listado de Clinicas Veterinarias asociadas.
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="secondary" size="small">
              Accede Aqui
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CallActions;
