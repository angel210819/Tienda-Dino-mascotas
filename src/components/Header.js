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
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import { CartContex } from "../components/Contex/CartContex";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function ButtonAppBar() {
  const { cart } = useContext(CartContex);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
              }}
              to="./"
            >
              <img src={Logo} alt="Dino" height="45" width="45" />
            </Link>
          </IconButton>
          <Typography sx={{ flexGrow: 1 }}>Dino Mascotas</Typography>
          <Navbar />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button color="inherit">
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                }}
                to="./busqueda"
              >
                <SearchIcon />
              </Link>
            </Button>
            <Button color="inherit">
              <Link color="inherit" to="./carrito">
                <Badge badgeContent={cart.length} color="secondary">
                  <img src={Carro} alt="Carro" height="30" width="30" />
                </Badge>
              </Link>
            </Button>
            <Button color="inherit">
              <img src={Fono} alt="Fono" height="30" width="30" />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
