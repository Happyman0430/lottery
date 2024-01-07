import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background: ${theme.background};
    font-family: "Helvetica Neue", Sans-Serif;
    box-sizing: border-box;
    
  }
`;
