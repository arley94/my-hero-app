import React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { HeroList } from '../heroes/HeroList';

const MarvelScreen = () => {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Marvel
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <HeroList searchType='byPublisher' searchTerm='Marvel Comics' />
    </>
  )
}

export default MarvelScreen