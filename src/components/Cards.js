import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Cards({titulo,image,contenido,descripcion,precio,peso}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 300}} padding="200px">
             <Typography  >
             {titulo}
        </Typography>
      <CardMedia
        height="150px"
        alt="Comida">
        <img src={image} alt="comida" height="250px" width= "300px" ></img>
        </CardMedia>
      <CardContent height="200px" width= "250px">
        <Typography variant="body2" color="text.secondary" textAlign={"center"} >
        {contenido} 
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={"center"}>
        {peso} 
        </Typography>
        <br></br>
        <Typography variant="body2" color="text.secondary" textAlign={"center"}>
          {precio} <span>
            $$
          </span>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          height={"200px"}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph textAlign={"center"}>
          {descripcion}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default Cards