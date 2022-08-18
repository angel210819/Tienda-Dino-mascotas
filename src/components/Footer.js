import React from 'react'
import Grid from '@mui/material/Grid';
import { Link, ListItem, ListItemText, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import List from '@mui/material/List';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import RoomIcon from '@mui/icons-material/Room';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Divider from '@mui/material/Divider';


export default function Footer() {
  return (
    <>
    <Grid 
        container
        spacing={2}
        color="primary"
        justifyContent="center"
        padding="3rem"
        >
        <Grid item xs={12} md={4} lg={4}>
            <List>
            <ListItem>
                <Link href="/#">Términos y condiciones</Link>
            </ListItem>
            <ListItem>
                <Link  href="/#">Politica y privacidad</Link>
            </ListItem>
            <ListItem>
                <Link href="/#">Politica de Devolucion y Cambios</Link>
            </ListItem>
            <ListItem>
                <Link href="/#">Preguntas Frecuentes</Link>
            </ListItem>
            </List>
        </Grid>

        <Grid item xs={12} md={4} lg={4}>
            <Typography variant='h6' color="primary" ml={2}>Contactanos</Typography>
           <List >
              <ListItem>
                    <WhatsAppIcon color='primary'/>
                    <Link href='/#' >5493513845741</Link>
              </ListItem>
              <ListItem>
                    <PhoneIcon color='primary'/>
                    <Link href='/#'>3513845741 (Solo Via Whatsapp)</Link>
              </ListItem>
              <ListItem>
                    <MailIcon color='primary'/>
                    <ListItemText > <Link href='/#' >nose@numen.com</Link></ListItemText>
              </ListItem>
              <ListItem>
                    <RoomIcon color='primary'/> 
                    <Link href='/#' >Rafael Nuñez 4430</Link>
              </ListItem>
           </List>
         </Grid>

        <Grid item xs={12} md={4} lg={4}>
            <Typography variant="h6" color="primary" mb={2}>Sigamos Conectados</Typography>
            <Link href="/#" fontSize={4}><InstagramIcon color="primary" /><FacebookIcon color="primary"/></Link>
        </Grid>
    </Grid>
    <Divider variant='middle'/>
    </>
   
  )
}
