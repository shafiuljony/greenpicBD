import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg: #262626;
    --gray-1: #BCB4B4;
    --light-green: #c9e7d8;
    --deep-dark: #1E1E1E;
    --deep-green: #fcfcfc;
    --gray-2: #363636;
    --white : white;
    --green3: #66A931;
    --black: black;
    --green: #28bd71;
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--white);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
`;
export default GlobalStyles;