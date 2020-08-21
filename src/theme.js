import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#568de9',
      main: '#0060b6',
      dark: '003785',
      contrastText: '#fff',
    },
    secondary: {
      main: grey[500],
      contrastText: '#000',
    },
    background: {
      sidebar: '#424242'
,      paper: '#121212'
    }
  },
});

export default theme;