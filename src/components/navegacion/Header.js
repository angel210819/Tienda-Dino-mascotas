import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
} from "@mui/material";

import { CartContex } from "../Contex/CartContex";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Logo from "./../../images/dinoNegro.png";

const Header = () => {
  const { cart, updateState } = useContext(CartContex);

  useEffect(() => {
    updateState();
    // eslint-disable-next-line
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }} marginBottom="5rem">
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
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
          <Typography
            sx={{ flexGrow: 1, userSelect: "none" }}
            fontFamily="Segoe UI Symbol"
            fontStyle="italic"
            variant="h1"
          >
            Dino Mascotas
          </Typography>
          <Navbar />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button color="inherit">
              <Link
                style={{
                  textDecoration: "none",
                  display: "flex",
                }}
                to="./busqueda"
              >
                <SearchIcon color="secondary" />
              </Link>
            </Button>
            <Button color="inherit">
              <Link color="inherit" to="./carrito">
                <Badge badgeContent={cart.length} color="secondary">
                  <ShoppingCartIcon color="secondary"></ShoppingCartIcon>
                </Badge>
              </Link>
            </Button>
            <Button color="inherit">
              <WhatsAppIcon color="secondary"></WhatsAppIcon>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
