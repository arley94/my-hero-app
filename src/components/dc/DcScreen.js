import React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { HeroList } from '../heroes/HeroList';

const DcScreen = () => {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        DC
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <HeroList searchType='byPublisher' searchTerm='DC Comics' />
    </>
  )
}

export default DcScreen