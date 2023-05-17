
import { createTheme } from "@mui/material";

export const dark = createTheme({
  palette: {
    mode: 'dark',
    background: {
      primary: '#1d1e21',
      default: '#1e1f23',
      paper: '#1c1e24',
      root: '#282c32',
      secondary: '#1d1e21',
      soft: '#7b8391d2',
      hover: '#000000',
    },
    primary: {
      // light teal
      main: '#3d6360',
    },
    text: {
      primary: '#e0e0e0',
    },
  }
});

export const light = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#eaeaea',
      paper: '#fafafa',
      root: '#d0d0d0',
      secondary: '#fafafa',
      soft: '#0000004f',
      primary: '#fafafa',
      hover: '#ffffff',
    },
    primary: {
      main: '#479983',
    },
    text: {
      primary: '#000000',
    },

  }
});
