import React from "react";
import Carousel from "react-material-ui-carousel";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";

import { Imagenes } from "./CarruselData.js";

import IconButton from "@material-ui/core/IconButton";
import Avatar from "@mui/material/Avatar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendIcon from "@mui/icons-material/Send";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import Ava from "../imagenes/avatar.jpeg";

const CarInst = (props) => {
  const items = Imagenes;
  return (
    <Carousel style={{ width: 420 }}>
      {items.map((item, i) => (
        <div>
          {/* Avatar */}
          <CardHeader
            style={{
              height: 0,
              display: "flex",
              width: 405,
              margin: "auto",
              marginTop: 20,
            }}
            avatar={<Avatar src={Ava} />}
            title="Dino-Mascotas"
            subheader={new Date().toDateString()}
            action={
              <IconButton>
                <MoreVertIcon style={{ marginTop: -15 }} />
              </IconButton>
            }
          />
          {/* Imagenes */}
          <img
            style={{
              objectFit: "scale-down",
              height: "75vh",
              display: "flex",
              width: 400,
              margin: "auto",
              marginTop: 40,
              marginBlock: 15,
            }}
            key={item.id}
            src={item.img}
            alt="Uno"
          />

          {/* Botones Me gusta, Comentar y Enviar */}

          <CardActions
            disableSpacing
            style={{
              height: 0,
              display: "flex",
              width: 420,
              margin: "auto",
              marginBlock: 20,
            }}
          >
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
          <br />
        </div>
      ))}
    </Carousel>
  );
};

export default CarInst;
