import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.foreground};
    transition: all 0.50s linear;
  }
  main {
    background-color: ${({ theme }) => theme.background};
  }
  button{
    color: ${({ theme }) => theme.foreground};
  }
  span{
    color: ${({ theme }) => theme.foreground};
  }
  path{
    color: ${({ theme }) => theme.foreground};
  }
  hr {
    background-color: ${({ theme }) => theme.lineColor};
  }
  p{
    color: ${({ theme }) => theme.textColorGrey};
  }
  nav{
    background-color: ${({ theme }) => theme.background};
  }
  a{
    color: ${({ theme }) => theme.foreground};
  }
  input{
    color: ${({ theme }) => theme.foreground};
  }
`;
