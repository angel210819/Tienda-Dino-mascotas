import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Logo from "./../images/dinoNegro.png";
import Fono from "./../images/fono.png";
import Carro from "./../images/carroCompras.png";
import SearchBar from "./SearchBar";
import Badge from "@mui/material/Badge";

import { CartContex } from "../components/Contex/CartContex";
import { useContext } from "react";

export default function ButtonAppBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { cart } = useContext(CartContex);

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
          <Button
            color="inherit"
            onClick={handleOpen}
            open={open}
            onClose={handleClose}
            href="./pruebabotoncarro"
            target="_blank"
          >
            <Badge badgeContent={cart.length} color="secondary">
              <img src={Carro} alt="Carro" height="30" width="30" />
            </Badge>
          </Button>
          <Button color="inherit">
            <img src={Fono} alt="Fono" height="30" width="30" />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
