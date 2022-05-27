import { createGlobalStyle } from "styled-components";
import { mainBackgroundColor, fontFamily } from './constants';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, input, button {
    font-family: ${fontFamily};
  }

  body {
    background-color: ${mainBackgroundColor};
    color: #fff;
  }
`;
