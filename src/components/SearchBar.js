import axios from "axios";
import { useState, useEffect } from "react";

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";

import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.info.dark, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.info.light, 0.25),
  },
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchBar = () => {
  const [productos, setProductos] = useState([]);

  const obtenerDatos = async () => {
    try {
      const datosCan = await axios.get(`http://localhost:5000/Caninos`);
      const infoCan = await datosCan.data;
      const datosFel = await axios.get(`http://localhost:5000/Felinos`);
      const infoFel = await datosFel.data;
      const datosAcc = await axios.get(`http://localhost:5000/Accesorios`);
      const infoAcc = await datosAcc.data;
      setProductos(infoCan.concat(infoFel).concat(infoAcc));
    } catch (error) {
      console.log("servidor caido");
    }
  };

  useEffect(() => {
    obtenerDatos();
    // eslint-disable-next-line
  }, []);
  console.log(productos);

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default SearchBar;
