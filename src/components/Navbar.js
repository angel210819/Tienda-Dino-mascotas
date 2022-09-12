import React from "react";
import {
  Button,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { CartContex } from "../components/Contex/CartContex";
import { useContext } from "react";

/*Arreglo de objetos con el Texto de los enlaces y las direcciones de las paginas a las que los mismo dirigen */
const pages = [
  {
    text: "Inicio",
    direction: "/",
  },
  {
    text: "Alimentos Caninos",
    direction: "/dogFood",
  },
  {
    text: "Alimentos Felinos",
    direction: "/catFood",
  },
  {
    text: "Accesorios",
    direction: "/accesorios",
  },
];

const Navbar = () => {
  /*Estado para hacer responsiva la Navbar */
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { cart } = useContext(CartContex);

  /*Metodos para el menu hamburguesa */

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        {/*Icono del boton hamburguesa */}
        <IconButton
          size="large"
          onClick={handleOpenNavMenu}
          color="inherit"
          sx={{ marginRight: "35px" }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          keepMounted
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
          <MenuItem>
            <Typography textAlign="center">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="./busqueda"
              >
                Buscar
              </Link>
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography textAlign="center">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="./carrito"
              >
                <Badge badgeContent={cart.length} color="secondary">
                  Carrito
                </Badge>
              </Link>
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography
              textAlign="center"
              style={{ textDecoration: "none", color: "black" }}
            >
              Telefono
            </Typography>
          </MenuItem>
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
          <Button key={page.text} onClick={handleCloseNavMenu} color="inherit">
            <Link
              to={page.direction}
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <Typography variant="overline" display="block">
                {page.text}
              </Typography>
            </Link>
          </Button>
        ))}
      </Box>
    </Box>
  );
};
export default Navbar;
