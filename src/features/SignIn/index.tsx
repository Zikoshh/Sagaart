import { Dispatch, FC, SetStateAction } from 'react';

import { Box, IconButton, Typography } from '@mui/material';
import {
  logoSize,
  title,
  signInButton,
  orText,
  appleButton,
  googleButton,
  yetFirstPart,
  yetSecondPart,
  inputsData,
} from './constants/data';
import styles from './constants/styles';

import CloseIcon from './assets/close.svg?react';
import Logo from '../../shared/ui/Logo';
import AppleIcon from './assets/apple.svg?react';
import GoogleIcon from './assets/google.svg?react';

import FormInput from '../../shared/ui/FormInput';
import Button from '../../shared/ui/Button';

interface SignUpProps {
  handleClose: () => void;
  setIsSignUpOpen: Dispatch<SetStateAction<boolean>>;
  setIsSignInOpen: Dispatch<SetStateAction<boolean>>;
}

const SignIn: FC<SignUpProps> = ({
  handleClose,
  setIsSignUpOpen,
  setIsSignInOpen,
}) => {
  const handleYet = () => {
    setIsSignUpOpen(true);
    setIsSignInOpen(false);
  };

  const handlePopupClick = (e) => {
    e.stopPropagation();
    console.log(e.target);
  };

  return (
    <Box sx={styles.overlay} onMouseDown={handleClose}>
      <Box sx={styles.container} onMouseDown={handlePopupClick}>
        <IconButton onMouseDown={handleClose} sx={styles.closeButton}>
          <CloseIcon />
        </IconButton>
        <Box sx={styles.headerContainer}>
          <Logo width={logoSize.width} height={logoSize.height} />
          <Typography sx={styles.title}>{title}</Typography>
        </Box>
        <Box sx={styles.inputsContainer}>
          <FormInput
            name={inputsData.email.name}
            label={inputsData.email.label}
            placeholder={inputsData.email.placeHolder}
          />
          <FormInput
            name={inputsData.password.name}
            label={inputsData.password.label}
            placeholder={inputsData.password.placeHolder}
          />
        </Box>
        <Box sx={styles.buttonsContainer}>
          <Button
            text={signInButton.text}
            bgColor={signInButton.bgColor}
            padding={signInButton.padding}
            fontSize={signInButton.fontSize}
            lineHeight={signInButton.lineHeight}
            width={signInButton.width}
            color={signInButton.color}
          />
          <Typography sx={styles.or}>{orText}</Typography>
          <Button
            text={appleButton.text}
            bgColor={appleButton.bgColor}
            padding={appleButton.padding}
            fontSize={appleButton.fontSize}
            lineHeight={appleButton.lineHeight}
            width={appleButton.width}
            color={appleButton.color}
            borderColor={appleButton.borderColor}
            SvgIcon={AppleIcon}
          />
          <Button
            text={googleButton.text}
            bgColor={googleButton.bgColor}
            padding={googleButton.padding}
            fontSize={googleButton.fontSize}
            lineHeight={googleButton.lineHeight}
            width={googleButton.width}
            color={googleButton.color}
            borderColor={googleButton.borderColor}
            SvgIcon={GoogleIcon}
          />
          <Typography sx={styles.yetFirst}>
            {yetFirstPart}
            <Typography
              onClick={handleYet}
              component='span'
              sx={styles.yetSecond}
            >
              {yetSecondPart}
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
