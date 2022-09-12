import { Alert } from '@mui/material';
import Grid from '@mui/material/Grid';


import React, { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
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

  //* uso el state de location para manejar el scroll
  const location = useLocation();

  console.log(location);
  const { cardId } = location.state || {};

  //* Este useEffect se encarga de situar el scroll adecuadamente
  useEffect(() => {
    console.log('scroll useEffect');
    console.log(cardId);
    if (cardId) {
      const item = document.querySelector(
        `.scroll-${cardId}`
      );
      if (item) {
        console.log('scrollIntoView')
        item.scrollIntoView();
        window.scrollBy(0, -50);
      }
    } else {
      window.scroll(0, 0);
      console.log('scroll en 0,0')
    }
  })

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
