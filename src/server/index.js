import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import JssProvider from 'react-jss/lib/JssProvider';
import { SheetsRegistry } from 'react-jss/lib/jss';
import {
  MuiThemeProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import reload from 'reload';
import theme from '../client/theme';
import App from '../client/App';

const app = express();
const dev = process.env.NODE_ENV === 'development';

if (dev) {
  reload(app);
}

app.use(express.static('public'));

app.use((req, res) => {
  const SheetRegistry = new SheetsRegistry();

  const generate = createGenerateClassName();

  const sheetsManager = new Map();

  const html = renderToString(
    <JssProvider registry={SheetRegistry} generateClassName={generate}>
      <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
        <App />
      </MuiThemeProvider>
    </JssProvider>,
  );

  const css = SheetRegistry.toString();

  res.send(`
    <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Fitness App</title>
    <style id='jss-styles'>${css}</style>
  </head>
  <body>
    <div id="app">${html}</div>
    <script src="main.js" async></script>
    ${dev ? '<script src="/reload/reload.js" async></script>' : ''}
  </body>
  </html>
  `);
});

app.listen(3000, () => console.log('Started at 3000'));
