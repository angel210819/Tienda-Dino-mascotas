import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import { Box, Grid } from "@mui/material";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Link} from "@mui/material";

import diego from '../sobreNosotros/images/diego.jpg'
import vivi from '../sobreNosotros/images/vivi.jpg'
import exe from '../sobreNosotros/images/exe.jpg'
import incognito from '../sobreNosotros/images/incognito.png'



export default function MediaCard() {
  return (
    <>
    <Typography variant="h3" textAlign="center" my={2} color="primary">Desarrolladores</Typography>
    
    <Grid container  ml={6} spacing={8}>
      {integrantes.map((el) => {
        return (
          <Grid item xl={4} md={6} xs={10} >
            <Card sx={{ maxWidth: 345 }}>
             <figure width="100%">
                <img alt={el.nombre} width="100%" height="250px" src={el.foto===null?incognito:el.foto} style={{objectFit:"cover"}} />
                </figure>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" textAlign="center" color="primary">
                  {el.nombre}
                </Typography>
                <Link href={el.linkedin} display="block" mt={2}>
                    <Box component="span" sx={{marginRight:"5px",marginTop:"5px"}}><LinkedInIcon /></Box>
                    {el.linkedin===""?"Desconocido":el.linkedin}
                </Link>
                <Link href={el.github} mt={2} display="block"  >
                <Box component="span" sx={{marginRight:"5px",marginTop:"5px"}}><GitHubIcon /></Box>
                    {el.github===""?"Desconocido" : el.github}
                </Link>
              </CardContent>
            </Card>
            
          </Grid>
        )
      })}
    </Grid>
    </>
  )
}

const integrantes = [
  {
    id: 0,
    foto: vivi,
    nombre: "Viviana Fiocchi",
    linkedin: "https://www.linkedin.com/in/viviana-fiocchi-321a43102",
    github: "https://github.com/VivianaFiocchi",
  },
  {
    id: 1,
    foto: exe,
    nombre: "Exequiel Ferreira",
    linkedin: "http://linkedin.com/in/exequiel-ferreira-b3484622b",
    github: "https://github.com/exe773",
  },
  {
    id: 2,
    foto: diego,
    nombre: "Diego Mercado",
    linkedin: "https://www.linkedin.com/in/diego-mercado-pc",
    github: "https://github.com/Diego2997",
  },
  {
    id: 3,
    foto: null,
    nombre: "Angel Juarez",
    linkedin: "www.linkedin.com/in/angel-mirko-juarez-166776224",
    github: "https://github.com/angel210819",
  },
  {
    id: 4,
    foto: null,
    nombre: "Jorge Sanchez",
    linkedin: "",
    github: "",
  },
  {
    id: 5,
    foto: null,
    nombre: "Cristian Hernandez",
    linkedin: "",
    github: "",
  },
  {
    id: 6,
    foto: null,
    nombre: "Astrid Ochoa",
    linkedin: "",
    github: "",
  },
];
