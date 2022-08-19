import React from "react";
import Carousel from "react-material-ui-carousel";
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';

import { Button } from "@mui/material";
import { Imagenes } from "./CarruselData.js";


import IconButton from '@material-ui/core/IconButton';
import Avatar from '@mui/material/Avatar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';


import Ava from "../imagenes/avatar.jpeg"

const CarInst = (props) => {  
    const items = Imagenes
    return (
    <Carousel 
      //boton previous y next
      NavButton={({ onClick, className, style, next, prev }) => {
        return (
          <Button onClick={onClick} className={className} style={style}>
            {next && " "}
            {prev && " "}
          </Button>
        );
      }}
    >
      {items.map((item, i) => (
       <div>
        	<CardHeader style={{height: 0, display: 'flex' ,width: 300, margin: "auto", marginTop:20,}}
				avatar={<Avatar src = {Ava}/>}
				title='Dino-Mascotas'
				subheader={new Date().toDateString()}
				action={
					<IconButton>
						<MoreVertIcon style={{marginTop:-15}}/>
					</IconButton>
				}
			/>
        <img style={{height: '50vh', display: 'flex' ,width: 300, margin: "auto", marginTop:40 , marginBlock:15}} key={item.id} 
        src={item.img}
        alt="Uno" 
      />
      		<CardActions disableSpacing style={{height: 0, display: 'flex' ,width: 300, margin:"auto", marginBlock:20}}> 
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



export default CarInst;


