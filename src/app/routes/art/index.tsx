import { useEffect, useState } from 'react';

import { Box, Button as MuiButton, Typography } from '@mui/material';
import {
  artData,
  originalButton,
  printButton,
  title,
  artistTitle,
  artMockData,
} from './constants/data';
import styles from './constants/style';

import ArrowIcon from './assets/arrowUp.svg?react';
import ProgressionIcon from './assets/progression.svg?react';
import ChevronIcon from './assets/chevronRight.svg?react';
import CartIcon from './assets/cart.svg?react';
import LikeIcon from './assets/heart.svg?react';

import Button from '../../../shared/ui/Button';
import { useParams } from 'react-router-dom';
import { getArt } from './lib/api';

interface Art {
  artist: string;
  author_signature: string;
  brushstrokes_material: string;
  decoration: string;
  description: string;
  imageUrl: string;
  orientation: string;
  series: string;
  size: string;
  style: string;
  title: string;
  year: string;
  id: number;
  about_author: string;
  author_photo: string;
  author_user_id: number;
}

const Art = () => {
  const [art, setArt] = useState<Art>();
  const { artId } = useParams();

  useEffect(() => {
    if (artId !== undefined) {
      getArt(artId).then((art) => {
        setArt(art);
        return;
      });
    }
  }, [artId]);

  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.container}>
        <Box sx={styles.imgContainer}>
          <Box
            component={'img'}
            src={`http://158.160.134.225/media-back/${art?.imageUrl}`}
            sx={styles.artImg}
            alt={art?.title}
          ></Box>
          <MuiButton sx={styles.imgButtonTop}>
            <CartIcon />
          </MuiButton>
          <MuiButton sx={styles.imgButtonBottom}>
            <LikeIcon />
          </MuiButton>
        </Box>
        <Box sx={styles.artContainer}>
          <Box sx={styles.artHeaderContainer}>
            <Typography sx={styles.artistName}>{art?.artist}</Typography>
            <Typography sx={styles.artName}>{art?.title}</Typography>
          </Box>
          <Box sx={styles.artInfoContainers}>
            <Box sx={styles.artInfoContainer}>
              <Typography sx={styles.artInfoTitle}>
                {artData.year}
                <Typography component={'span'} sx={styles.artInfoValue}>
                  {art?.year}
                </Typography>
              </Typography>
              <Typography sx={styles.artInfoTitle}>
                {artData.size}
                <Typography component={'span'} sx={styles.artInfoValue}>
                  {art?.size}
                </Typography>
              </Typography>
              <Typography sx={styles.artInfoTitle}>
                {artData.material}
                <Typography component={'span'} sx={styles.artInfoValue}>
                  {art?.brushstrokes_material}
                </Typography>
              </Typography>
              <Typography sx={styles.artInfoTitle}>
                {artData.style}
                <Typography component={'span'} sx={styles.artInfoValue}>
                  {art?.style}
                </Typography>
              </Typography>
            </Box>
            <Box sx={styles.artInfoContainer}>
              <Typography sx={styles.artInfoTitle}>
                {artData.signature}
                <Typography component={'span'} sx={styles.artInfoValue}>
                  {art?.author_signature}
                </Typography>
              </Typography>
              <Typography sx={styles.artInfoTitle}>
                {artData.exhibitions}
                <Typography component={'span'} sx={styles.artInfoValue}>
                  {art?.orientation}
                </Typography>
              </Typography>
              <Typography sx={styles.artInfoTitle}>
                {artData.design}
                <Typography component={'span'} sx={styles.artInfoValue}>
                  {art?.decoration}
                </Typography>
              </Typography>
              <Typography sx={styles.artInfoTitle}>
                {artData.series}
                <Typography component={'span'} sx={styles.artInfoValue}>
                  {art?.series}
                </Typography>
              </Typography>
            </Box>
          </Box>
          <Box sx={styles.artButtonsContainer}>
            <MuiButton sx={styles.progressionButton} variant='outlined'>
              <ArrowIcon />
              {'5 000'}
              <ProgressionIcon />
              <ChevronIcon />
            </MuiButton>
            <Button
              text={originalButton.text + ` ${artMockData.price.original}`}
              bgColor={originalButton.bgColor}
              padding={originalButton.padding}
              fontSize={originalButton.fontSize}
              lineHeight={originalButton.lineHeight}
              width={originalButton.width}
              color={originalButton.color}
            />
            <Button
              text={printButton.text + ` ${artMockData.price.print}`}
              bgColor={printButton.bgColor}
              padding={printButton.padding}
              fontSize={printButton.fontSize}
              lineHeight={printButton.lineHeight}
              width={printButton.width}
              color={printButton.color}
              borderColor={printButton.borderColor}
            />
          </Box>
        </Box>
      </Box>
      <Typography sx={styles.title}>{title}</Typography>
      <Box sx={styles.container}>
        <Box sx={styles.imgContainer}>
          <Box
            component={'img'}
            src={`http://158.160.134.225/media-back/${art?.author_photo}`}
            sx={styles.artistImg}
            alt={art?.artist}
          />
          <MuiButton sx={styles.imgButtonBottom}>
            <LikeIcon />
          </MuiButton>
        </Box>
        <Box sx={styles.artistInfoContainer}>
          <Box sx={styles.artistDescriptionContainer}>
            <Box>
              <Typography sx={styles.artistTextDefault}>
                {art?.about_author}
              </Typography>
              <Typography sx={styles.artistTextDefault}>
                {artMockData.artist.mentors}
              </Typography>
            </Box>
            <Box>
              {artMockData.artist.study.map((data, i) => {
                return (
                  <Typography key={i} sx={styles.artistTextDefault}>
                    {data.period + ' - ' + data.institutionName}
                  </Typography>
                );
              })}
            </Box>
          </Box>
          <Box sx={styles.artistExhibitions}>
            <Typography sx={styles.artistTextBold}>{artistTitle}</Typography>
            <Box sx={styles.artistExhibitionsContainer}>
              {artMockData.artist.exhibitions.map((exhibition, i) => {
                return (
                  <Typography key={i} sx={styles.artistTextDefault}>
                    {exhibition.year + ' - ' + exhibition.info}
                  </Typography>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Art;
