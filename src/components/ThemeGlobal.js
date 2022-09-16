import { createTheme } from "@mui/material/styles";
import { grey, purple, deepPurple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[300],
    },
    secondary: {
      main: purple[400],
    },
    action: {
      main: grey[50],
    },
  },
});

export default theme;
