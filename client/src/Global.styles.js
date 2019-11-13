import {createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans Condensed';
        padding: 20px 40px;

        @media screen and (max-width: 800px){
            padding: 10px;
        }
    }

    a {
        text-decoration: none;
        color: black;
    }

    * {
        box-sizing: border-box;
    }

`; 
/*

&:first-child {
      margin-right: 7.5px;
  }
  
  &:last-child {
      margin-left: 7.5px;
  }


  */