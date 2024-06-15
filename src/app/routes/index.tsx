import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../theme/theme';
import '../fonts/Inter/inter.css';
import { Outlet } from 'react-router-dom';
import Header from '../../widgets/Header';
import Footer from '../../widgets/Footer';
import SignIn from '../../features/SignIn';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: 'relative' }}>
        <Header />
        <Box>
          <Outlet />
        </Box>
        <Footer />
        {false ? <SignIn /> : ''}
      </Box>
    </ThemeProvider>
  );
};

export default App;
