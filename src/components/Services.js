import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import { Link } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#AFDBF5',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function Services() {
  return (
    // Contenedor principal
    <Box sx={{ width: '100%' }}>

    <Grid item xs>
      <Typography gutterBottom variant="h4" component="div" color="#6495ED">
        Servicios Caninos
      </Typography>
    </Grid>

      {/* <hr/> */}
      <Divider variant="middle" />
      <br/>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        
        {/* Primer Grid secundario contenedor con imagen */}
        <Grid item xs={6}>
         <Item>
            <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" color="#6495ED" component="div" fontSize={25}>
                    Adiestramiento Canino
                  </Typography>

                <Grid item>
                  <ButtonBase sy={{ width: 128, height: 200}}>
                    <Img alt="adiestramiento" src="../adiestramiento-perros.jpg" width="92.5%"/>
                  </ButtonBase>
                    <Link href="" target="blank" underline="hover">Reservaciones</Link>
                </Grid>
                </Grid>
            </Grid>
          </Item>
        </Grid>

        {/* Segundo Grid secundario contenedor con imagen */}
        <Grid item xs={6}>
          <Item>
            <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" color="#6495ED" component="div"  fontSize={25}>
                    Paseos Caninos
                  </Typography>
    
                  <Grid item>
                    <ButtonBase sy={{ width: 128, height: 200}}>
                      <Img alt="adiestramiento" src="../perros_paseo.jpg" width="90%"/>
                    </ButtonBase>
                    
                    <Link href="" target="_blank" underline="hover">Reservaciones</Link>
                  </Grid>
                </Grid>
              </Grid>
          </Item>
        </Grid>
      </Grid>
    </Box>          
  );
}
