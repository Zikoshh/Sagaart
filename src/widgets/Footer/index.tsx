import { Box, Typography } from '@mui/material';
import Logo from '../../shared/ui/Logo';
import {
  aboutUsNavLinks,
  aboutUsTitle,
  catalogNavLinks,
  catalogTitle,
  logoSize,
  profileTitle,
  profileNavLinks,
  scannerNavLinks,
  scannerTitle,
  socialsTitle,
  titleStyles,
} from './constants';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import IconButton from '../../shared/ui/IconButton';
import TwitterIcon from './assets/twitter.svg?react';
import InstagramIcon from './assets/instagram.svg?react';
import TelegramIcon from './assets/telegram.svg?react';

const Footer = () => {
  return (
    <Box
      sx={{
        padding: '60px 80px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Logo width={logoSize.width} height={logoSize.height} />
      <Box sx={{ display: 'flex', columnGap: '140px' }}>
        <Box sx={{ display: 'flex', rowGap: '20px', flexDirection: 'column' }}>
          <Typography sx={titleStyles}>{aboutUsTitle}</Typography>
          <Box
            sx={{ display: 'flex', flexDirection: 'column', rowGap: '12px' }}
          >
            {aboutUsNavLinks.map((link, i) => {
              return (
                <NavLink className='footer__link' to={link.rout} key={i}>
                  {link.text}
                </NavLink>
              );
            })}
          </Box>
        </Box>
        <Box sx={{ display: 'flex', rowGap: '20px', flexDirection: 'column' }}>
          <Typography sx={titleStyles}>{scannerTitle}</Typography>
          <Box
            sx={{ display: 'flex', flexDirection: 'column', rowGap: '12px' }}
          >
            {scannerNavLinks.map((link, i) => {
              return (
                <NavLink className='footer__link' to={link.rout} key={i}>
                  {link.text}
                </NavLink>
              );
            })}
          </Box>
        </Box>
        <Box sx={{ display: 'flex', rowGap: '20px', flexDirection: 'column' }}>
          <Typography sx={titleStyles}>{catalogTitle}</Typography>
          <Box
            sx={{ display: 'flex', flexDirection: 'column', rowGap: '12px' }}
          >
            {catalogNavLinks.map((link, i) => {
              return (
                <NavLink className='footer__link' to={link.rout} key={i}>
                  {link.text}
                </NavLink>
              );
            })}
          </Box>
        </Box>
        <Box sx={{ display: 'flex', rowGap: '20px', flexDirection: 'column' }}>
          <Typography sx={titleStyles}>{profileTitle}</Typography>
          <Box
            sx={{ display: 'flex', flexDirection: 'column', rowGap: '12px' }}
          >
            <NavLink
              className='footer__link'
              to={profileNavLinks.favorites.route}
            >
              {profileNavLinks.favorites.text}
            </NavLink>
            <NavLink className='footer__link' to={'/'}>
              {profileNavLinks.sell.text}
            </NavLink>
            <NavLink className='footer__link' to={'/'}>
              {profileNavLinks.appraisal.text}
            </NavLink>
            <NavLink
              className='footer__link'
              to={profileNavLinks.purchases.route}
            >
              {profileNavLinks.purchases.text}
            </NavLink>
            <NavLink
              className='footer__link'
              to={profileNavLinks.settings.route}
            >
              {profileNavLinks.settings.text}
            </NavLink>
            <NavLink className='footer__link' to={'/'}>
              {profileNavLinks.feedback.text}
            </NavLink>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', rowGap: '32px', flexDirection: 'column' }}>
          <Typography sx={titleStyles}>{socialsTitle}</Typography>
          <Box sx={{ display: 'flex', columnGap: '20px' }}>
            <IconButton SvgIcon={TwitterIcon} />
            <IconButton SvgIcon={InstagramIcon} />
            <IconButton SvgIcon={TelegramIcon} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
