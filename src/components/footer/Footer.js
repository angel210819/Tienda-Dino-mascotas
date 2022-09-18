import {
  Link,
  ListItem,
  ListItemText,
  Typography,
  Grid,
  List,
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
      <br />
      <br />
      <Grid
        container
        width="100%"
        justifyContent="center"
        padding="3rem"
        sx={{ bgcolor: "primary.main" }}
      >
        <Grid item xs={10} md={4} lg={4}>
          <List>
            <ListItem>
              <Link
                href="/#"
                color="secondary"
                sx={{ textDecoration: "none" }}
                fontFamily="Roboto"
              >
                Términos y condiciones
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="/#"
                color="secondary"
                sx={{ textDecoration: "none" }}
                fontFamily="Roboto"
              >
                Politica y privacidad
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="/#"
                color="secondary"
                sx={{ textDecoration: "none" }}
                fontFamily="Roboto"
              >
                Politica de Devolucion y Cambios
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="/#"
                color="secondary"
                sx={{ textDecoration: "none" }}
                fontFamily="Roboto"
              >
                Preguntas Frecuentes
              </Link>
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={10} md={4} lg={4}>
          <Typography variant="h6" color="secondary" ml={2} fontFamily="Roboto">
            Contactanos
          </Typography>
          <List>
            <ListItem>
              <WhatsAppIcon color="secondary" sx={{ marginRight: "10px" }} />
              <Link
                href="/#"
                color="secondary"
                sx={{ textDecoration: "none" }}
                fontFamily="Roboto"
              >
                5493513845741
              </Link>
            </ListItem>
            <ListItem>
              <MailIcon color="secondary" sx={{ marginRight: "10px" }} />
              <ListItemText>
                <Link
                  href="/#"
                  color="secondary"
                  sx={{ textDecoration: "none" }}
                  fontFamily="Roboto"
                >
                  academia@numen.com
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem>
              <RoomIcon color="secondary" sx={{ marginRight: "10px" }} />
              <Link
                href="/#"
                color="secondary"
                sx={{ textDecoration: "none" }}
                fontFamily="Roboto"
              >
                Rafael Nuñez 4430
              </Link>
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={9} md={4} lg={4}>
          <Typography variant="h6" color="secondary" mb={2} fontFamily="Roboto">
            Sigamos Conectados
          </Typography>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            fontSize={10}
            mr={1}
            color="secondary"
            sx={{ textDecoration: "none" }}
          >
            <InstagramIcon color="secondary" />
          </Link>
          <Link
            href="https://es-la.facebook.com/"
            target="_blank"
            fontSize={10}
            sx={{ textDecoration: "none" }}
          >
            <FacebookIcon color="secondary" />
          </Link>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        padding="0rem 0rem 3rem 3rem"
        sx={{ bgcolor: "primary.main" }}
      >
        <Grid item xs={12} md={12} lg={4}>
          <Typography variant="h6" color="secondary" ml={2} fontFamily="Roboto">
            Medios de Pago
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          {Tarjetas.map((el) => (
            <Link key={el.id} href="/#" margin="3px">
              {" "}
              <img alt={el.alt} src={el.src} width="50px" />
            </Link>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
