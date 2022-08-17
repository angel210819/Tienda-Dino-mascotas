import React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  IconButton,
  Container,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

/*Arreglo de objetos con el Texto de los enlaces y las direcciones de las paginas a las que los mismo dirigen */
const pages = [
  {
    text: "Inicio",
    direction: "/",
  },
  {
    text: "Alimentos Caninos",
    direction: "/perros",
  },
  {
    text: "Alimentos Felinos",
    direction: "/gatos",
  },
  {
    text: "Accesorios",
    direction: "/accesorios",
  },
];

const Navbar = () => {
  /*Estado para hacer responsiva la Navbar */
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  /*Metodos para el menu hamburguesa */

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {/*Icono del boton hamburguesa */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/*mapeo de las paginas para generar los enlaces en el menu hamburguesa */}
              {pages.map((page) => (
                <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      to={page.direction}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {page.text}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "space-around",
              },
            }}
          >
            {/*mapeo de las paginas para generar los enlaces en la barra de navegacion */}
            {pages.map((page) => (
              <Button
                key={page.text}
                onClick={handleCloseNavMenu}
                color="inherit"
              >
                <Link
                  to={page.direction}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {page.text}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
