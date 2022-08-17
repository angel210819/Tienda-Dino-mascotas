import React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 3, marginBottom: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
          <Button href="/" variant="text" color="inherit">
            Inicio
          </Button>

          <Button href="/perros" variant="text" color="inherit">
            Alimentos Caninos
          </Button>

          <Button href="/gatos" variant="text" color="inherit">
            Alimentos Felinos
          </Button>

          <Button href="/accesorios" variant="text" color="inherit">
            Accesorios
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
