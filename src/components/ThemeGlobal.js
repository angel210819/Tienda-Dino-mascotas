import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ef5e05",
    },
    secondary: {
      main: "#000000",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      "Segoe UI Emoji",
      "Segoe UI Symbol",
    ].join(","),
  },
});

export default theme;
