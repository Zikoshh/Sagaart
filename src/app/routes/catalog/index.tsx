import { ChangeEvent, useEffect, useState } from 'react';
import { getArts } from './lib/api';
import { Masonry } from '@mui/lab';

import { Box, Button, Pagination, PaginationItem } from '@mui/material';
import { filterButtonsText, artsLimit } from './constants/data';
import styles from './constants/styles';

import ChevronLeftIcon from './assets/chevronLeft.svg?react';
import ChevronRightIcon from './assets/chevronRight.svg?react';
import ChevronDownIcon from './assets/chevronDown.svg?react';
import FilterIcon from './assets/filter.svg?react';
import ArtCard from '../../../features/ArtCard';

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
}

const Catalog = () => {
  const [offset, setOffset] = useState('0');
  const [page, setPage] = useState(1);
  const [arts, setArts] = useState<Art[]>([]);

  useEffect(() => {
    getArts({ limit: artsLimit, offset: offset }).then((res) => {
      setArts(res.results);
    });
  }, [offset]);

  const handlePagination = (_e: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    if (value > page) {
      setOffset(`${+offset + +artsLimit}`);
    } else {
      setOffset(`${+offset - +artsLimit}`);
    }
  };

  return (
    <Box sx={styles.catalog}>
      <Box sx={styles.filter}>
        <Box sx={styles.filterSelects}>
          <Button
            variant='outlined'
            sx={styles.filterButtonSelect}
            endIcon={<ChevronDownIcon />}
          >
            {filterButtonsText.price}
          </Button>
          <Button
            variant='outlined'
            sx={styles.filterButtonSelect}
            endIcon={<ChevronDownIcon />}
          >
            {filterButtonsText.sizes}
          </Button>
          <Button
            variant='outlined'
            sx={styles.filterButtonSelect}
            endIcon={<ChevronDownIcon />}
          >
            {filterButtonsText.orientation}
          </Button>
          <Button
            variant='outlined'
            sx={styles.filterButtonSelect}
            endIcon={<ChevronDownIcon />}
          >
            {filterButtonsText.category}
          </Button>
          <Button
            variant='outlined'
            sx={styles.filterButtonSelect}
            endIcon={<ChevronDownIcon />}
          >
            {filterButtonsText.style}
          </Button>
          <Button
            variant='outlined'
            sx={styles.filterButtonSelect}
            endIcon={<ChevronDownIcon />}
          >
            {filterButtonsText.color}
          </Button>
        </Box>
        <Button sx={styles.filterButton} startIcon={<FilterIcon />}>
          {filterButtonsText.recommended}
        </Button>
      </Box>
      <Masonry columns={4} spacing={5}>
        {arts.map((art) => {
          return (
            <ArtCard
              key={art.id}
              id={art.id}
              title={art.title}
              imageUrl={art.imageUrl}
              artist={art.artist}
              original={'40000'}
              print={'5000'}
            />
          );
        })}
      </Masonry>
      <Box sx={styles.paginationContainer}>
        <Pagination
          sx={styles.pagination}
          count={100}
          page={page}
          onChange={handlePagination}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ChevronLeftIcon, next: ChevronRightIcon }}
              {...item}
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default Catalog;
