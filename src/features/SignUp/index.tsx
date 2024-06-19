import { Dispatch, FC, SetStateAction, useState } from 'react';

import {
  Box,
  Checkbox,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import {
  logoSize,
  title,
  selectData,
  signUpButton,
  orText,
  checkboxText,
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

const SignUp: FC<SignUpProps> = ({
  handleClose,
  setIsSignUpOpen,
  setIsSignInOpen,
}) => {
  const [selectValue, setSelectValue] = useState(selectData.defaultValue);

  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  const handleYet = () => {
    setIsSignUpOpen(false);
    setIsSignInOpen(true);
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
            name={inputsData.firstName.name}
            label={inputsData.firstName.label}
            placeholder={inputsData.firstName.placeHolder}
          />
          <FormInput
            name={inputsData.lastName.name}
            label={inputsData.lastName.label}
            placeholder={inputsData.lastName.placeHolder}
          />
          <FormInput
            name={inputsData.telephone.name}
            label={inputsData.telephone.label}
            placeholder={inputsData.telephone.placeHolder}
          />
          <FormInput
            name={inputsData.email.name}
            label={inputsData.email.label}
            placeholder={inputsData.email.placeHolder}
          />
          <Box sx={styles.selectContainer}>
            <InputLabel sx={styles.selectLabel}>Вы художник?</InputLabel>
            <Select
              onChange={handleSelectChange}
              value={selectValue}
              sx={{
                color: `${
                  selectValue === selectData.defaultValue
                    ? '#D5D5D5'
                    : '#252525'
                }`,
                fontSize: '24px',
                fontWeight: '400',
                lineHeight: '33.6px',
                border: '1px solid #005CE6',
                width: '100%',
                '& .MuiSelect-select': {
                  padding: '13px 24px',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
              }}
            >
              <MenuItem disabled value={selectData.defaultValue}>
                {selectData.defaultValue}
              </MenuItem>
              {selectData.options.map((option) => {
                return (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                );
              })}
            </Select>
          </Box>
          <FormInput
            name={inputsData.password.name}
            label={inputsData.password.label}
            placeholder={inputsData.password.placeHolder}
          />
          <FormInput
            name={inputsData.completePassword.name}
            label={inputsData.completePassword.label}
            placeholder={inputsData.completePassword.placeHolder}
          />
        </Box>
        <Box sx={styles.checkboxContainer}>
          <Checkbox sx={styles.checkbox} />
          <Typography sx={styles.checkboxText}>{checkboxText}</Typography>
        </Box>
        <Box sx={styles.buttonsContainer}>
          <Button
            text={signUpButton.text}
            bgColor={signUpButton.bgColor}
            padding={signUpButton.padding}
            fontSize={signUpButton.fontSize}
            lineHeight={signUpButton.lineHeight}
            width={signUpButton.width}
            color={signUpButton.color}
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

export default SignUp;
