import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../theme/theme';
import '../fonts/Inter/inter.css';
import { Outlet } from 'react-router-dom';
import Header from '../../widgets/Header';
import Footer from '../../widgets/Footer';
import SignUp from '../../features/SignUp';
import { useEffect, useState } from 'react';
import SignIn from '../../features/SignIn';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  useEffect(() => {
    setIsLoggedIn(false);
  }, []);

  const handleClosePopups = () => {
    setIsSignUpOpen(false);
    setIsSignInOpen(false);
  };

  const handleSignUpOpen = () => {
    setIsSignUpOpen(true);
  };

  const handleSignInOpen = () => {
    setIsSignInOpen(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: 'relative', maxWidth: '1920px' }}>
        <Header
          isLoggedIn={isLoggedIn}
          handleSignUpOpen={handleSignUpOpen}
          handleSignInOpen={handleSignInOpen}
        />
        <Box>
          <Outlet />
        </Box>
        <Footer />
        {isSignUpOpen ? (
          <SignUp
            handleClose={handleClosePopups}
            setIsSignUpOpen={setIsSignUpOpen}
            setIsSignInOpen={setIsSignInOpen}
          />
        ) : (
          ''
        )}
        {isSignInOpen ? (
          <SignIn
            handleClose={handleClosePopups}
            setIsSignUpOpen={setIsSignUpOpen}
            setIsSignInOpen={setIsSignInOpen}
          />
        ) : (
          ''
        )}
      </Box>
    </ThemeProvider>
  );
};

export default App;
