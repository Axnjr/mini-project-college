import React, { useState } from 'react';
import LayoutWrapper, { GlobalStyle } from './index.styled';
import SimpleBottomNavigation from './navigation';

export default function Layout ({ children }) {
  return(
   
      <LayoutWrapper>
        {children}
        <SimpleBottomNavigation />
      </LayoutWrapper>
   
  );
}
