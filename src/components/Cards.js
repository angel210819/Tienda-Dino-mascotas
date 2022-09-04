import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { CartContex } from "../components/Contex/CartContex";
import { useContext } from "react";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Cards({ id, image, nombre, descripcion, precio, peso }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { addToCart } = useContext(CartContex);

  return (
    <Card sx={{ maxWidth: 300 }} padding="200px" key={id}>
      <CardMedia height="150px" alt="Comida">
        <img src={image} alt={nombre} height="250px" width="300px"></img>
      </CardMedia>
      <CardContent height="200px" width="250px">
        <Typography
          height="60px"
          variant="body2"
          color="text.secondary"
          textAlign={"center"}
        >
          {nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={"center"}>
          {peso}
        </Typography>
        <br></br>
        <Typography variant="body2" color="text.secondary" textAlign={"center"}>
          <span>$</span> {precio}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton
          color="primary"
          size="medium"
          aria-label="add to shopping cart"
          onClick={() => {
            addToCart({
              id: id,
              nombre: nombre,
              img: image,
              precio: precio,
            });
          }}
        >
          <AddShoppingCartIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          height={"200px"}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph textAlign={"rigth"}>
            {descripcion}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default Cards;
