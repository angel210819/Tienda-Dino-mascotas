import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E9271A',
      light: '#757ce8',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      main: '#26A7FF'
    },
  },
});

export default theme;