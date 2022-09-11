import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

import { Link as LinkRouter, useLocation } from 'react-router-dom';

const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters
}) => {

  const location = useLocation();

  return (
    <Card sx={{ display: { sm: 'flex' }, height: '100%' }} >
      <CardMedia
        component="img"
        sx={{
          width: {
            sm: 0.3,
          }
        }}
        image={`./assets/heroes/${id}.jpg`}
        alt="Live from space album cover"
      />
      <Box sx={{ width: '100%' }}>
        <CardContent>
          <Typography variant="h5" sx={{ mb: 2 }}>
            {superhero}
          </Typography>
          <Typography component='p' variant='body1' sx={{ mb: 1 }}>
            {alter_ego}
          </Typography>

          {
            (alter_ego !== characters)
            && <Typography variant="body1" sx={{ mb: 1 }}>
              {superhero}
            </Typography>
          }
          <Typography component='p' variant='caption' sx={{ mb: 1, color: 'text.secondary' }}>
            {first_appearance}
          </Typography>

        </CardContent>
        <CardActions>
          <Button
            component={LinkRouter}
            to={`/hero/${id}`}
            state={{ from: `${location.pathname}${location.search}` }}
            size="small">
            Más...
          </Button>
        </CardActions>
      </Box>
    </Card>
  )
}

export default HeroCard

