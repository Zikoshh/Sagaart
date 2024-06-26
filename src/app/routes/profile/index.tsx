import { Avatar, Box, Typography } from '@mui/material';
import { navLinks, buttons, user } from './constants/data';
import styles from './constants/styles';

import avatarImg from './assets/avatar.jpeg';

import NavLink from '../../../shared/ui/NavLink';
import { Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <Box sx={styles.profile}>
      <Box sx={styles.sideContainer}>
        <Box sx={styles.userContainer}>
          <Avatar src={avatarImg} sx={styles.avatar} />
          <Box>
            <Typography sx={styles.userText}>{user.firstName}</Typography>
            <Typography sx={styles.userText}>{user.secondName}</Typography>
          </Box>
        </Box>
        <Box sx={styles.navLinks}>
          <NavLink route={navLinks.main.route} text={navLinks.main.text} />
          <NavLink
            route={navLinks.subscription.route}
            text={navLinks.subscription.text}
          />
          <NavLink route={navLinks.onSale.route} text={navLinks.onSale.text} />
          <NavLink
            route={navLinks.purchases.route}
            text={navLinks.purchases.text}
          />
          <NavLink
            route={navLinks.favoriteArtists.route}
            text={navLinks.favoriteArtists.text}
          />
          <NavLink
            route={navLinks.favorites.route}
            text={navLinks.favorites.text}
          />
          <NavLink
            route={navLinks.paymentMethods.route}
            text={navLinks.paymentMethods.text}
          />
          <Box sx={styles.buttons}>
            <Typography sx={styles.buttonBold}>{buttons.sellArt}</Typography>
            <Typography sx={styles.buttonBold}>{buttons.sellMyArt}</Typography>
          </Box>
          <Typography sx={styles.buttonDefault}>{buttons.edit}</Typography>
          <NavLink
            route={navLinks.settings.route}
            text={navLinks.settings.text}
          />
          <Typography sx={styles.buttonDefault}>{buttons.feedback}</Typography>
          <Typography sx={styles.buttonDefault}>{buttons.logOut}</Typography>
        </Box>
      </Box>
      <Box sx={styles.outletContainer}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Profile;
