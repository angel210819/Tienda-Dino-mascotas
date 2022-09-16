import { createTheme } from '@mui/material/styles';
import { grey, purple, deepPurple } from '@mui/material/colors';


const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[300],
    },
    secondary: {
      main: purple[400],
    },
    action:{
        main: grey[50],
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
});

export default theme