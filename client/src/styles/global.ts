import { Colors } from 'styles/colors';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body, input, textarea, select, button {
    font: 400 1rem "Roboto", sans-serif;
  }

  body {
    background: ${Colors.background};
    color: ${Colors.white};
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
