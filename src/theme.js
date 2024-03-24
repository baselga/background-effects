import { createTheme } from '@mui/material/styles';
import { teal, orange, red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: teal,
    secondary: orange,
    error: red,
  },
});

export default theme;