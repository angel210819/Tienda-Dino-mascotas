import React from "react";
import Grid from "@mui/material/Grid";
import { Link, ListItem, ListItemText, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import List from "@mui/material/List";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import RoomIcon from "@mui/icons-material/Room";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Divider from "@mui/material/Divider";

export default function Footer() {
  return (
    <>
      <Grid
        container
        width="100%"
        color="primary"
        justifyContent="center"
        padding="3rem"
      >
        <Grid item xs={10} md={4} lg={4}>
          <List>
            <ListItem>
              <Link href="/#">Términos y condiciones</Link>
            </ListItem>
            <ListItem>
              <Link href="/#">Politica y privacidad</Link>
            </ListItem>
            <ListItem>
              <Link href="/#">Politica de Devolucion y Cambios</Link>
            </ListItem>
            <ListItem>
              <Link href="/#">Preguntas Frecuentes</Link>
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={10} md={4} lg={4}>
          <Typography variant="h6" color="primary" ml={2}>
            Contactanos
          </Typography>
          <List>
            <ListItem>
              <WhatsAppIcon color="primary" />
              <Link href="/#">5493513845741</Link>
            </ListItem>
            <ListItem>
              <PhoneIcon color="primary" />
              <Link href="/#">3513845741 (Solo via Whatsapp)</Link>
            </ListItem>
            <ListItem>
              <MailIcon color="primary" />
              <ListItemText>
                <Link href="/#">academia@numen.com</Link>
              </ListItemText>
            </ListItem>
            <ListItem>
              <RoomIcon color="primary" />
              <Link href="/#">Rafael Nuñez 4430</Link>
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={9} md={4} lg={4}>
          <Typography variant="h6" color="primary" mb={2}>
            Sigamos Conectados
          </Typography>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            fontSize={10}
            mr={1}
          >
            <InstagramIcon color="primary" />
          </Link>
          <Link
            href="https://es-la.facebook.com/"
            target="_blank"
            fontSize={10}
          >
            <FacebookIcon color="primary" />
          </Link>
        </Grid>
      </Grid>
      <Divider variant="middle" />
      <Grid container justifyContent="center" padding="3rem">
        <Grid item xs={12} md={12} lg={4}>
          <Typography variant="h6" color="primary" ml={2}>
            Medios de Pago
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          {tarjetas.map((el) => (
            <Link key={el.id} href="/#">
              {" "}
              <img alt={el.alt} src={el.src} width="40px" />
            </Link>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

const tarjetas = [
  {
    id: 0,
    src: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png",
    alt: "Visa",
  },
  {
    id: 1,
    src: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png",
    alt: "Mastercard",
  },
  {
    id: 2,
    src: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png",
    alt: "AmericaExpress",
  },
  {
    id: 3,
    src: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-naranja@2x.png",
    alt: "Naranja",
  },
  {
    id: 4,
    src: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/nativa@2x.png",
    alt: "Nativa",
  },
  {
    id: 5,
    src: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercarddebit@2x.png",
    alt: "Maestro",
  },
];
