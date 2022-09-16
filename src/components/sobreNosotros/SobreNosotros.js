import { Box, Grid, Link, Typography, CardContent, Card } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Desarrolladores } from "./Desarrolladores";
import incognito from "../../images/nosotros/incognito.png";

const MediaCard = () => {
  return (
    <>
      <Typography variant="h3" textAlign="center" my={2} color="primary">
        Desarrolladores
      </Typography>
      <Grid container ml={6} spacing={8}>
        {Desarrolladores.map((el) => {
          return (
            <Grid item xl={4} md={6} xs={10}>
              <Card sx={{ maxWidth: 345 }}>
                <figure width="100%">
                  <img
                    alt={el.nombre}
                    width="100%"
                    height="250px"
                    src={el.foto === null ? incognito : el.foto}
                    style={{ objectFit: "cover" }}
                  />
                </figure>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign="center"
                    color="primary"
                  >
                    {el.nombre}
                  </Typography>
                  <Link href={el.linkedin} display="block" mt={2}>
                    <Box
                      component="span"
                      sx={{ marginRight: "5px", marginTop: "5px" }}
                    >
                      <LinkedInIcon />
                    </Box>
                    {el.linkedin === "" ? "Desconocido" : el.linkedin}
                  </Link>
                  <Link href={el.github} mt={2} display="block">
                    <Box
                      component="span"
                      sx={{ marginRight: "5px", marginTop: "5px" }}
                    >
                      <GitHubIcon />
                    </Box>
                    {el.github === "" ? "Desconocido" : el.github}
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default MediaCard;
