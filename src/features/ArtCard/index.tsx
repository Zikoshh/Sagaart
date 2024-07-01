import { useNavigate } from 'react-router-dom';
import { FC } from 'react';

import { Box, IconButton, Typography } from '@mui/material';
import { originalText, printText } from './constants/data';
import styles from './constants/styles';

import LikeIcon from './assets/heart.svg?react';

interface ArtCardProps {
  id: string;
  title: string;
  imageUrl: string;
  artist: string;
  original: string;
  print: string;
}

const ArtCard: FC<ArtCardProps> = ({
  id,
  title,
  imageUrl,
  artist,
  original,
  print,
}) => {
  const navigate = useNavigate();

  const handleArtOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.id === '0') {
      return;
    }
    navigate(`/art/${id}`);
  };

  return (
    <Box onMouseUp={handleArtOpen} sx={styles.art}>
      <Box
        component={'img'}
        src={`http://158.160.134.225/media-back/${imageUrl}`}
        sx={styles.artImg}
      />
      <Box sx={styles.artInfo}>
        <Typography sx={styles.artAuthor}>
          {artist}
          <IconButton sx={{ padding: '0' }}>
            <LikeIcon id='0' />
          </IconButton>
        </Typography>
        <Typography sx={styles.artName}>{title}</Typography>
      </Box>
      <Box sx={styles.artPricing}>
        <Typography sx={styles.artOriginalText}>
          {originalText}
          <Typography sx={styles.artOriginalPrice} component={'span'}>
            {original}
          </Typography>
        </Typography>
        <Typography sx={styles.artPrintText}>
          {printText}
          <Typography sx={styles.artPrintPrice} component={'span'}>
            {print}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default ArtCard;
