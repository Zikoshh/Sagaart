import { Box } from '@mui/material';
import Logo from '../../shared/ui/Logo';
import {
  logoSize,
  navLinksData,
  signInButton,
  signUpButton,
} from './constants';
import SearchInput from '../../shared/ui/SearchInput';
import NavLink from '../../shared/ui/NavLink';
import Button from '../../shared/ui/Button';
import { FC } from 'react';
import IconButton from '../../shared/ui/IconButton';
import BasketIcon from './assets/basket.svg?react';
import HeartIcon from './assets/heart.svg?react';
import UserIcon from './assets/user.svg?react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isLoggedIn: boolean;
}

const Header: FC<HeaderProps> = ({ isLoggedIn }) => {
  return (
    <Box
      sx={{
        p: '28px 80px',
        display: 'flex',
        columnGap: `${isLoggedIn ? '264px' : '66px'}`,
      }}
    >
      <Box sx={{ display: 'flex', columnGap: '48px', width: '100%' }}>
        <Logo width={logoSize.width} height={logoSize.height} />
        <Box
          sx={{
            paddingBottom: '11px',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '28px',
            maxWidth: '1150px',
            width: '100%',
          }}
        >
          <SearchInput />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {navLinksData.map((link, i) => {
              return <NavLink key={i} rout={link.rout} text={link.text} />;
            })}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          columnGap: `${isLoggedIn ? '32px' : '12px'}`,
          paddingTop: `${isLoggedIn ? '16px' : ''}`,
        }}
      >
        {isLoggedIn ? (
          <>
            <Link to='/basket'>
              <IconButton
                SvgIcon={BasketIcon}
                isBasket={true}
                numberOfProducts={'2'}
              />
            </Link>
            <Link to='/profile/favorites'>
              <IconButton SvgIcon={HeartIcon} />
            </Link>
            <Link to='/profile'>
              <IconButton SvgIcon={UserIcon} />
            </Link>
          </>
        ) : (
          <>
            <Button
              text={signInButton.text}
              bgColor={signInButton.bgColor}
              padding={signInButton.padding}
              fontSize={signInButton.fontSize}
              lineHeight={signInButton.lineHeight}
              width={signInButton.width}
              color={signInButton.color}
              borderColor={signInButton.borderColor}
            />
            <Button
              text={signUpButton.text}
              bgColor={signUpButton.bgColor}
              padding={signUpButton.padding}
              fontSize={signUpButton.fontSize}
              lineHeight={signUpButton.lineHeight}
              width={signUpButton.width}
              color={signUpButton.color}
            />
          </>
        )}
      </Box>
    </Box>
   </Box>
   <Box sx={{ display: "flex", alignItems: "flex-start", columnGap: "12px" }}>
    <Button
     text="Вход"
     bgColor="white"
     padding="16px 0"
     fontSize="24px"
     lineHeight="33.6px"
     width="140px"
     color="#252525"
     borderColor="#757575"
    />
    <Button
     text="Регистрация"
     bgColor="#252525"
     padding="16px 0"
     fontSize="24px"
     lineHeight="33.6px"
     width="232px"
     color="white"
    />
   </Box>
  </Box>
 );
};

export default Header;
