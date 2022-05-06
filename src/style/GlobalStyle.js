import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

   *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
   }
   
   body{
      background: ${ props => props.theme.colors.bodyColor};
   }
`
