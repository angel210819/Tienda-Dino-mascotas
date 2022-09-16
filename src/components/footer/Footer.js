import {
  Link,
  ListItem,
  ListItemText,
  Typography,
  Grid,
  List,
  Divider,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import RoomIcon from "@mui/icons-material/Room";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Tarjetas } from "./Tarjetas";

const Footer = () => {
  return (
    <>
      <Grid container width="100%" justifyContent="center" padding="3rem">
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
              <WhatsAppIcon color="primary" sx={{ marginRight: "10px" }} />
              <Link href="/#">5493513845741</Link>
            </ListItem>
            <ListItem>
              <MailIcon color="primary" sx={{ marginRight: "10px" }} />
              <ListItemText>
                <Link href="/#">academia@numen.com</Link>
              </ListItemText>
            </ListItem>
            <ListItem>
              <RoomIcon color="primary" sx={{ marginRight: "10px" }} />
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
          {Tarjetas.map((el) => (
            <Link key={el.id} href="/#">
              {" "}
              <img alt={el.alt} src={el.src} width="40px" />
            </Link>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
