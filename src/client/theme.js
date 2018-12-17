import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: {
      main: blue.A200,
      light: blue[200],
      dark: blue[700],
    },
    type: 'dark',
  },
  spacing: {
    unit: 10,
  },
});

export default theme;
