import { Typography } from '@mui/material';
import { NavLink as Link } from 'react-router-dom';
import './NavLink.css';
import { FC } from 'react';

interface NavLinkProps {
  rout: string;
  text: string;
}

const NavLink: FC<NavLinkProps> = ({ rout, text }) => {
  return (
    <Link className={({ isActive }) => (isActive ? 'active' : '')} to={rout}>
      <Typography
        sx={{
          fontWeight: 'inherit',
          fontSize: 'inherit',
          lineHeight: 'inherit',
        }}
      >
        {text}
      </Typography>
    </Link>
  );
};

export default NavLink;
