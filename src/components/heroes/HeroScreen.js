import { Button, Card, CardMedia, Grid, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import React, { useMemo } from 'react'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

const HeroScreen = () => {

  const location = useLocation();

  const navigate = useNavigate();

  const { heroId } = useParams();

  const hero = useMemo(() => getHeroById(heroId), [heroId])

  if (!hero) {
    return <Navigate to='/' />
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  const handleReturn = () => {

    const { from } = location.state || {};

    if (!from) {
      return navigate('/');
    }

    navigate(from);

  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={4}>
        <Card>
          <CardMedia
            component="img"
            width='100%'
            image={`../assets/heroes/${heroId}.jpg`}
            alt="green iguana"
          />
        </Card>
      </Grid>
      <Grid item xs={8}>
        <Typography variant='h4' component='h3'>
          {superhero}
        </Typography>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography align="center" variant='body1' component='span'>
                  <strong>Alter ego: </strong> {alter_ego}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography align="center" variant='body1' component='span'>
                  <strong>Publisher: </strong> {publisher}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>
                <Typography align="center" variant='body1' component='span'>
                  <strong>First Appearance: </strong> {first_appearance}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Typography variant='h6' component='h5'>
          Characters
        </Typography>
        <Typography variant='body1' component='p' sx={{ mb: 2 }}>
          {characters}
        </Typography>
        <Button onClick={handleReturn} variant="outlined">Return</Button>
      </Grid>
    </Grid>
  )
}

export default HeroScreen


/* < Box sx = {{ pl: 2 }}>
        <Typography align="center" variant='overline' component='p'>
          <strong>Alter ego:</strong> Arley Coto
        </Typography>
        <Divider />
        <Typography align="center" variant='overline' component='p'>
          <strong>Alter ego:</strong> Arley Coto
        </Typography>
        <Divider />
        <Typography align="center" variant='overline' component='p'>
          <strong>Alter ego:</strong> Arley Coto
        </Typography>
      </Box > */