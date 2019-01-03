import { createGlobalStyle } from 'styled-components';
import { lighten } from 'polished';

import 'minireset.css/minireset.css';

const purple = '#8c43ff';

export const theme = {
  main: purple,
  inactive: lighten('0.1', purple),
  gray: 'rgba(41, 51, 71, 0.65)',
};

export default createGlobalStyle`
  html {
    /* font-family: 'Open Sans', sans-serif; */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

`;
