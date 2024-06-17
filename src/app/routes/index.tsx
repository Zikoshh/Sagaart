import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../theme/theme';
import '../fonts/Inter/inter.css';
import { Outlet } from 'react-router-dom';
import Header from '../../widgets/Header';
import Footer from '../../widgets/Footer';
import SignIn from '../../features/SignIn';
import { useState } from 'react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: 'relative', maxWidth: '1920px' }}>
        <Header isLoggedIn={isLoggedIn} />
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
