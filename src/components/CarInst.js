import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

import { Button } from "@mui/material";
import { Imagenes } from "./CarruselData.js";

import IconButton from '@material-ui/core/IconButton'
import Avatar from '@mui/material/Avatar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CardActions from '@material-ui/core/CardActions'

const CarInst = (props) => {  
    const items = Imagenes
    return (
    <Carousel
      //boton previous y next
      NavButton={({ onClick, className, style, next, prev }) => {
        return (
          <Button onClick={onClick} className={className} style={style}>
            {next && ">"}
            {prev && "<"}
          </Button>
        );
      }}
    >
      {items.map((item, i) => (
       <div>
        <Avatar alt="Remy Sharp" src="../imagenes/avatar.webp" />
        <h1>Tienda</h1>
        <img key={item.id}
        src={item.img}
        alt="Uno"
      />
      		<CardActions disableSpacing>
				<IconButton>
					<FavoriteBorderIcon />
				</IconButton>
				<IconButton>
					<ChatBubbleOutlineIcon />
				</IconButton>
				<IconButton>
					<SendIcon />
				</IconButton>
			</CardActions>
      </div> 
      ))}
    </Carousel>
  );
};

const Item = (props) => {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
    </Paper>
  );
};

export default CarInst;
