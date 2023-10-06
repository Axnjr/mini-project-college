import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  background-color: ${props => props.theme.bg};
  color:${props => props.theme.fg};
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontBaseSize};
  line-height: ${props => props.theme.fontBaseLineHeight};
`;

export const LayoutWrapper = styled.main`
  min-height: calc(100vh - 200px);
  padding-bottom: 200px;
  width: 100%;
  background-color: ${props => props.theme.bg};
  color:${props => props.theme.fg};
`;

export default LayoutWrapper;