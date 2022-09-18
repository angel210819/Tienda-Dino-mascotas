import {
  Box,
  Link,
  Typography,
  CardContent,
  Card,
  CardMedia,
} from "@mui/material";
import { Fragment } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Desarrolladores } from "./Desarrolladores";
import incognito from "../../images/nosotros/incognito.png";
import Grid2 from "@mui/material/Unstable_Grid2";

const MediaCard = () => {
  return (
    <>
      <Typography variant="h2" textAlign="center" my={2} color="primary">
        Desarrolladores
      </Typography>
      <br />
      <br />
      <Fragment>
        <Grid2
          container
          spacing={{ xs: 2, md: 9 }}
          columns={{ xs: 2, sm: 1, md: 3, xl: 3 }}
          justifyContent="center"
        >
          {Desarrolladores.map((el, i) => {
            return (
              <Grid2 key={i}>
                <Card sx={{ maxWidth: "300px" }} key={i} raised>
                  <CardMedia height="150px" alt={el.nombre}>
                    <img
                      alt={el.nombre}
                      width="300px"
                      height="250px"
                      src={el.foto === null ? incognito : el.foto}
                      style={{ objectFit: "cover" }}
                    />
                  </CardMedia>
                  <CardContent>
                    <Typography
                      variant="h5"
                      textAlign="center"
                      color="secondary"
                      fontFamily="Roboto"
                    >
                      {el.nombre}
                    </Typography>
                    <Box display="flex" mt={2}>
                      <Box sx={{ marginRight: "2px", marginTop: "2px" }}>
                        <LinkedInIcon color="primary" />
                      </Box>
                      {el.linkedin === "" ? (
                        "Desconocido"
                      ) : (
                        <Link marginLeft={1} href={el.linkedin}>
                          Linkedin {el.nombre}
                        </Link>
                      )}
                    </Box>

                    <Box mt={2} display="flex">
                      <Box
                        component="span"
                        sx={{ marginRight: "5px", marginTop: "5px" }}
                      >
                        <GitHubIcon color="primary" />
                      </Box>
                      {el.github === "" ? (
                        "Desconocido"
                      ) : (
                        <Link href={el.github} marginLeft={1}>
                          GitHub {el.nombre}
                        </Link>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Grid2>
            );
          })}
        </Grid2>
      </Fragment>
    </>
  );
};
export default MediaCard;
