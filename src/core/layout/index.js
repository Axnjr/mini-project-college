import React, { useState } from 'react';

// theming
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider as MaterialThemeProvider } from '@mui/material/styles';
import { styledDarkTheme, styledLightTheme } from '../../core/styles/theme';
import { darkMaterialTheme, lightMaterialTheme } from '../../core/styles/theme';

import LayoutWrapper, { GlobalStyle } from './index.styled';


import SimpleBottomNavigation from './navigation';

export default function Layout ({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') === 'light' ? 'light': 'dark');

  const changeTheme = () => {
    if (localStorage.getItem('theme') === 'light') {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  }

  return(
    <MaterialThemeProvider theme={theme === 'light' ? lightMaterialTheme : darkMaterialTheme}>
    <StyledThemeProvider theme={theme === 'light' ? styledLightTheme : styledDarkTheme}>
      <GlobalStyle />
      <LayoutWrapper>
        {children}
        <SimpleBottomNavigation theme={theme} changeTheme={() => changeTheme()} />
      </LayoutWrapper>
    </StyledThemeProvider>
    </MaterialThemeProvider>
  );
}
