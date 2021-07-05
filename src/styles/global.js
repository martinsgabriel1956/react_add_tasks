import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Noto Sans JP', sans-serif;
  }

  body {
    margin: 0;
    background-color: #3f3f3f;
  }

  button {
    cursor: pointer;
    font: inherit;
    background-color: #7a0144;
    border: 1px solid #7a0144;
    border-radius: 20px;
    padding: 0.5rem 2rem;
    color: white;
  }

  button:hover,
  button:active {
    background-color: #9c095a;
    border-color: #9c095a;
  }
`;
