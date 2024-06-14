import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../theme/theme';
import '../fonts/Inter/inter.css';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
