import {
  Button,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { CartContex } from "../Contex/CartContex";
import { useContext, useState } from "react";

/*Arreglo de objetos con el Texto de los enlaces y las direcciones de las paginas a las que los mismo dirigen */
const pages = [
  {
    text: "Inicio",
    direction: "/",
  },
  {
    text: "Perros",
    direction: "/dogFood",
  },
  {
    text: "Gatos",
    direction: "/catFood",
  },
  {
    text: "Accesorios",
    direction: "/accesorios",
  },
  {
    text: "Nosotros",
    direction: "/sobreNosotros",
  },
];

const Navbar = () => {
  /*Estado para hacer responsiva la Navbar */
  const [anchorElNav, setAnchorElNav] = useState(null);
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
          <Button key={page.text} onClick={handleCloseNavMenu}>
            <Link
              to={page.direction}
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <Typography
                variant="overline"
                display="block"
                color="secondary"
                fontSize="1rem"
                fontFamily="Roboto"
              >
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
