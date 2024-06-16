import { Box, IconButton as MuiIconButton } from '@mui/material';
import { FC } from 'react';

interface IconButtonProps {
  SvgIcon: any;
  isBasket?: boolean;
  numberOfProducts?: string;
}

const IconButton: FC<IconButtonProps> = ({
  SvgIcon,
  isBasket,
  numberOfProducts,
}) => {
  return (
    <MuiIconButton sx={{ padding: '0', position: 'relative' }}>
      {isBasket ? (
        <Box
          sx={{
            position: 'absolute',
            width: '35px',
            height: '35px',
            bgcolor: '#252525',
            borderRadius: '50%',
            top: '-15px',
            right: '-20px',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {numberOfProducts}
        </Box>
      ) : (
        ''
      )}
      <SvgIcon />
    </MuiIconButton>
  );
};

export default IconButton;
