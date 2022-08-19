import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
//import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchBar from './SearchBar';


export default function DenseAppBar() {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' },  alignItems: "flex-end" }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8IU2S9XtjmHtU4crrQmrDi_wAgBsUutfISg&usqp=CAU" alt="Dino" height="25" width="25" />
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ ml: 65 }}>
            <SearchBar  /> 
          </IconButton>
         
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ border:1, mr: 10 }}>
          <img src="https://st2.depositphotos.com/4060975/8056/v/600/depositphotos_80565476-stock-illustration-magnifier-vector-icon.jpg" alt="Dino" height="25" width="25" />
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ ml: 55 }}>
          <img src="https://w7.pngwing.com/pngs/225/984/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping.png" alt="Dino" height="25" width="25" />
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzjMxvIPK2fFWZuvqRlIKxpgsfgTUoEOyZCC3dRuhUwQVfNEnDehQMElK8ld1k7k2TZY&usqp=CAU" alt="Dino" height="25" width="25" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
