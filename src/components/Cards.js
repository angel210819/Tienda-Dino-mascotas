import { useState } from "react";
import {
  styled,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Collapse,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import ModalCarrito from "./ModalCarrito";

const Cards = ({ id, image, nombre, descripcion, precio, peso }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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

  return (
    <Card sx={{ maxWidth: "300px" }} key={id} raised>
      <CardMedia height="150px" alt="Comida">
        <img src={image} alt={nombre} height="250px" width="300px"></img>
      </CardMedia>
      <CardContent height="200px" width="250px">
        <Typography
          height="60px"
          color="black"
          textAlign={"center"}
          fontFamily="Roboto"
          fontSize="1rem"
        >
          {nombre}
        </Typography>
        <Typography color="text.secondary" textAlign={"center"}>
          {peso}
        </Typography>
        <br></br>
        <Typography
          color="black"
          textAlign={"center"}
          fontFamily="Roboto"
          fontSize="1.5rem"
          fontStyle="italic"
        >
          <span>$</span> {precio}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <ModalCarrito id={id} image={image} nombre={nombre} precio={precio} />
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
};
export default Cards;
