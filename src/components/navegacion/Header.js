import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Logo from "./../../images/dinoNegro.png";
import Badge from "@mui/material/Badge";
import { CartContex } from "../Contex/CartContex";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Header = () => {
  const { cart } = useContext(CartContex);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar component="nav">
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
          <Typography sx={{ flexGrow: 1, userSelect: "none" }}>
            DinoMascotas
          </Typography>
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
                <SearchIcon color="action" />
              </Link>
            </Button>
            <Button color="inherit">
              <Link color="inherit" to="./carrito">
                <Badge badgeContent={cart.length} color="secondary">
                  <ShoppingCartIcon color="action"></ShoppingCartIcon>
                </Badge>
              </Link>
            </Button>
            <Button color="inherit">
              <WhatsAppIcon color="action"></WhatsAppIcon>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <br />
      <br />
    </Box>
  );
};

export default Header;
