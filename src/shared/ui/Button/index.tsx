import { Button as MuiButton } from '@mui/material';
import { FC } from 'react';

interface ButtonProps {
  text: string;
  bgColor: string;
  padding: string;
  fontSize: string;
  lineHeight: string;
  width: string;
  color: string;
  borderColor?: string;
  SvgIcon?: any;
}

const Button: FC<ButtonProps> = ({
  text,
  bgColor,
  padding,
  fontSize,
  lineHeight,
  width,
  color,
  borderColor,
  SvgIcon,
}) => {
  return (
    <MuiButton
      startIcon={SvgIcon ? <SvgIcon /> : ''}
      variant='outlined'
      sx={{
        bgcolor: `${bgColor}`,
        padding: `${padding}`,
        fontSize: `${fontSize}`,
        lineHeight: `${lineHeight}`,
        width: `${width}`,
        color: `${color}`,
        borderColor: `${borderColor ? borderColor : '#252525'}`,
        textTransform: 'none',
        ':hover': {
          backgroundColor: `${bgColor}`,
        },
      }}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
