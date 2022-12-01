import { createTheme, ThemeOptions } from '@mui/material';

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#F05523',
    },
    secondary: {
      main: '#bcbcbc',
    },
    background: {
      default: '#e5e5e5',
    },
    info: {
      main: '#3A9FCF',
      contrastText: '#fff',
    },
    error: {
      main: '#AE2D04',
    },
    text: {
      primary: '#000',
      secondary: '#fff',
    },
  },
  typography: {
    fontFamily: ['Work Sans'].join(','),
  },
};

export const mainTheme = createTheme(themeOptions);
