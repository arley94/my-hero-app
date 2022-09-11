import React, { useRef } from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Box, Button, TextField } from '@mui/material';
import { useForm } from '../../hooks/useForm';
import { HeroList } from '../heroes/HeroList';
import { useSearchParams } from 'react-router-dom';
import useSize from '../../hooks/useSize';

const SearchScreen = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const q = searchParams.get('q') || '';

  const [formValues, handleInputChange] = useForm({
    searchText: q
  })

  const { searchText } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams(`q=${searchText}`)
  }

  const heroListBox = useRef();
  const sizeHeroList = useSize(heroListBox);

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Search
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Box
        sx={
          {
            display: 'flex',
            flexDirection: {
              xs: 'column',
              sm: 'row'
            },
          }
        }
      >
        <Box
          component='form'
          onSubmit={handleSubmit}
          sx={{ mb: 2, width: { sm: '40%' } }}>
          <TextField
            name='searchText'
            value={searchText}
            onChange={handleInputChange}
            fullWidth
            color='primary'
            label="Find your hero"
            margin="normal"
          />
          <Button
            type="submit"
            variant="outlined"
            fullWidth
          >Search</Button>
        </Box>
        <Box ref={heroListBox} sx={{ mt: { sm: 2 }, width: { sm: '50%' }, ml: { sm: 'auto' } }}>
          <HeroList size={sizeHeroList} searchType='byName' searchTerm={q} />
        </Box>
      </Box>

    </>
  )
}



export default SearchScreen