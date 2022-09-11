import { Alert } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useMemo } from 'react';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import HeroCard from './HeroCard';

const getHerosList = (searchType, searchTerm) => {
  switch (searchType) {
    case 'byPublisher':
      return getHeroesByPublisher(searchTerm);

    case 'byName':
      return getHeroesByName(searchTerm)

    default:
      return [];
  }
}

const HeroListWithoutMemo = ({ searchType, searchTerm, size }) => {

  const heroes = useMemo(() => getHerosList(searchType, searchTerm), [searchTerm, searchType]);

  const gridSize = {
    sm: size?.width < 600 ? 12 : 6,
    md: size?.width < 600 ? 12 : 4
  }

  return (
    <>

      {
        searchTerm === '' ?
          <Alert severity="info">Search a hero</Alert> :
          heroes.length === 0 ?
            <Alert severity='error'>There is no hero with {searchTerm}</Alert> :
            <Grid container spacing={3}>
              {
                heroes.map((hero) => {
                  return (
                    <Grid className={`scroll-${hero.id}`} key={hero.id} item xs={12} sm={gridSize.sm} md={gridSize.md}>
                      <HeroCard {...hero} />
                    </Grid>
                  )
                })
              }
            </Grid>

      }
    </>


  )
}



export const HeroList = React.memo(HeroListWithoutMemo);
