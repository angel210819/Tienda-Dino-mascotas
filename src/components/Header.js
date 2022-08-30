import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Logo from './../images/dinoNegro.png'
import Fono from './../images/fono.png'
import Carro from './../images/carroCompras.png'
import SearchBar from './SearchBar'

import Backdrop from '@mui/material/Backdrop';
// import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




export default function ButtonAppBar() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <img src={Logo} alt="Dino" height="45" width="45" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dino Mascotas.
          </Typography>
          <SearchBar />
          <Button color="inherit" onClick={handleOpen}>
          <img src={Carro} alt="Carro" height="30" width="30" />
          </Button>
          <Button color="inherit"><img src={Fono} alt="Fono" height="30" width="30" /></Button>
        </Toolbar>
      </AppBar>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              productos añadidos
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
