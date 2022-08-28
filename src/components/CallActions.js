import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";

import imgCats from "../images/Cats.jpg";
import imgDogs from "../images/Dogs.jpg";
import imgVet from "../images/Veterinary.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: "30%",
  },
});

export default function CallActions() {
  const classes = useStyles();
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        "& > :not(style)": {
          m: 1,
          width: "49%",
          height: 300,
          alignItems: "center",
        },
      }}
    >
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="Gatos"
          width="auto"
          height="140"
          image={imgCats}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Club de Descuentos
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Incribetete aqui para acceder a nuestros descuentos y beneficios
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="secondary" size="small">
            Accede Aqui
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={imgDogs}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Fundación de Protección Animal
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Ingresa aqui y conoceras todas las iniciativas de la Fundación
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="secondary" size="small">
            Accede Aqui
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.root}>
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
          <Typography variant="body2" color="text.secondary">
            Conoce el listado de Clinicas Veterinarias asociadas a nuestra
            tienda
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="secondary" size="small">
            Accede Aqui
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
