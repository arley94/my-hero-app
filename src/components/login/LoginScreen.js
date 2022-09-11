import { Button, Container, Divider, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginScreen = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/', { replace: true })
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant='h3' component='h1'>
        Login
      </Typography>
      <Divider sx={{ mb: 4 }} />
      <Button onClick={handleClick} variant="contained">
        Login
      </Button>
    </Container>
  )
}

export default LoginScreen