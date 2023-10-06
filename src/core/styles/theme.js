import { createTheme } from '@mui/material/styles';

const globals = {
  // typography!
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  
  fontWeight: '400',
  
  // fonts
  fontBaseSize: `1em`,
  // line heights
  fontBaseLineHeight: `calc(24 / 15)`,
}

export const styledDarkTheme = {
  // add globals in
  ...globals, 

  // colors
  bg: '#212121',
  fg: 'white',

  accent: '#e1a06b',
};

export const styledLightTheme = {
  // add globals in
  ...globals, 

  // colors
  bg: 'white',
  fg: '#212121',

  accent: '#626ea4',
};

// globals for material UI
const materialGlobal = {
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
}

export const darkMaterialTheme = createTheme({
  // add global
  ...materialGlobal, 
  palette: {
    mode: 'dark',
    primary: {
      main: '#e1a06b'
    }
  },
});

export const lightMaterialTheme = createTheme({
  // add global
  ...materialGlobal,
  palette: {
    mode: 'light',
    primary: {
      main: '#626ea4'
    }
  },
});