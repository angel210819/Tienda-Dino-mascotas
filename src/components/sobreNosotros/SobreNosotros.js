import { Box, Grid, Link, Typography, CardContent, Card , CardMedia} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Desarrolladores } from "./Desarrolladores";
import incognito from "../../images/nosotros/incognito.png";

const MediaCard = () => {
  return (
    <>
      <Typography variant="h2" textAlign="center" my={2} color="primary">
        Desarrolladores
      </Typography>
      <br/>
      <br/>
      <Grid container
      display="flex"
      justifyContent="space-evenly"
      spacing={3}
      mx="auto">
        {Desarrolladores.map((el) => {
          return (
            <Grid item xs={10} md={4} xl={4}>
              <Card sx={{ maxWidth: "300px" }}>
              <CardMedia height="100px" alt="Comida" >
                  <img
                    alt={el.nombre}
                    width="300px"
                    height="250px"
                    src={el.foto === null ? incognito : el.foto}
                    style={{ objectFit: "cover" }}
                  />
                </CardMedia>
                <CardContent height="250px" width="350px">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign="center"
                    color="secondary"
                  >
                    {el.nombre}
                  </Typography>
                  <Link href={el.linkedin} display="flex" mt={2}>
                    <Box
                      component="span"
                      sx={{ marginRight: "2px", marginTop: "2px" }}
                    >
                      <LinkedInIcon />
                    </Box>
                    {el.linkedin === "" ? "Desconocido" : el.linkedin}
                  </Link>
                  <Link href={el.github} mt={2} display="flex">
                    <Box
                      component="span"
                      sx={{ marginRight: "5px", marginTop: "5px" }}
                    >
                      <GitHubIcon />
                    </Box>
                    {el.github === "" ? <> Desconocido <br/><br/> </>: el.github}
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
