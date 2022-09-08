import React from "react";
import Rutas from "./components/Rutas";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/ThemeConfig"

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <Rutas />;
    </ThemeProvider>
  );
}

export default App;
