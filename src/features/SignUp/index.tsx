import {
  Box,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import Logo from '../../shared/ui/Logo';
import {
  logoSize,
  title,
  styles,
  selectData,
  signUpButton,
  orText,
  checkboxText,
  appleButton,
  googleButton,
  yetFirstPart,
  yetSecondPart,
} from './constants';
import CloseIcon from './assets/close.svg?react';
import FormInput from '../../shared/ui/FormInput';
import { useState } from 'react';
import Button from '../../shared/ui/Button';
import Checkbox from '../../shared/ui/Checkbox';
import AppleIcon from './assets/apple.svg?react';
import GoogleIcon from './assets/google.svg?react';

const SignUp = () => {
  const [selectValue, setSelectValue] = useState(selectData.defaultValue);

  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <Box sx={styles.overlay}>
      <Box sx={styles.container}>
        <IconButton
          sx={{
            padding: '0',
            position: 'absolute',
            top: '35px',
            right: '32px',
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box
          sx={{ display: 'flex', alignItems: 'flex-start', columnGap: '32px' }}
        >
          <Logo width={logoSize.width} height={logoSize.height} />
          <Typography sx={styles.title}>{title}</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '20px',
          }}
        >
          <FormInput name='firstName' label='Имя' placeholder='Введите имя' />
          <FormInput
            name='lastName'
            label='Фамилия'
            placeholder='Введите фамилию'
          />
          <FormInput
            name='telephone'
            label='Телефон'
            placeholder='Введите телефон'
          />
          <FormInput name='email' label='Почта' placeholder='Введите почту' />
          <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '8px' }}>
            <InputLabel
              sx={{
                fontSize: '20px',
                fontWeight: '500',
                lineHeight: '24.2px',
                color: '#757575',
              }}
            >
              Вы художник?
            </InputLabel>
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
            name='password'
            label='Пароль'
            placeholder='Введите свой пароль'
          />
          <FormInput
            name='complete-password'
            label='Подтвердите пароль'
            placeholder='Введите свой пароль'
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            columnGap: '8px',
            margin: '23px 0 20px 0',
          }}
        >
          <Checkbox />
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: '400',
              lineHeight: '28px',
              width: '600px',
              color: '#252525',
            }}
          >
            {checkboxText}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '16px' }}>
          <Button
            text={signUpButton.text}
            bgColor={signUpButton.bgColor}
            padding={signUpButton.padding}
            fontSize={signUpButton.fontSize}
            lineHeight={signUpButton.lineHeight}
            width={signUpButton.width}
            color={signUpButton.color}
          />
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: '400',
              lineHeight: '24.2px',
              color: '#252525',
              textAlign: 'center',
            }}
          >
            {orText}
          </Typography>
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
          <Typography
            sx={{
              fontSize: '24px',
              fontWeight: '400',
              lineHeight: '33.6px',
              display: 'flex',
              columnGap: '8px',
              justifyContent: 'center',
            }}
          >
            {yetFirstPart}
            <Typography
              sx={{ fontSize: '24px', fontWeight: '600', lineHeight: '33.6px' }}
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
