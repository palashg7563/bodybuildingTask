import React from 'react';
import { hydrate } from 'react-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createGenerateClassName from
  '@material-ui/core/styles/createGenerateClassName';
import JssProvider from 'react-jss/lib/JssProvider';
import App from './App';
import theme from './theme';

const generateClassName = createGenerateClassName();
hydrate(
  <JssProvider generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </JssProvider>,
  document.getElementById('app'),
  () => {
    document.getElementById('jss-styles').remove();
  },
);
