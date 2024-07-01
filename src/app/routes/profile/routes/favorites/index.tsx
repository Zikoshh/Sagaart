import { SetStateAction, useState } from 'react';
import { Masonry } from '@mui/lab';

import { Box, MenuItem, Select, Typography } from '@mui/material';
import { arts, title, selectData } from './constants/data';
import styles from './constants/styles';

import ChevronIcon from './assets/chevronDown.svg?react';
import ArtCard from '../../../../../features/ArtCard';

const Favorites = () => {
  const [selectValue, setSelectValue] = useState(selectData.defaultValue);

  const handleSelectChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectValue(e.target.value);
  };

  return (
    <Box sx={styles.favorites}>
      <Typography sx={styles.title}>{title}</Typography>
      <Box sx={styles.container}>
        <Select
          IconComponent={ChevronIcon}
          onChange={handleSelectChange}
          value={selectValue}
          sx={styles.select}
        >
          {selectData.options.map((option) => {
            return (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            );
          })}
        </Select>
        <Masonry columns={3} spacing={5} sx={{ maxWidth: '1310px' }}>
          {arts.map((art, i) => {
            return (
              <ArtCard
                key={art.name}
                id={i}
                title={art.name}
                imageUrl={art.img}
                artist={art.author}
                original={art.original}
                print={art.print}
              />
            );
          })}
        </Masonry>
      </Box>
    </Box>
  );
};

export default Favorites;
