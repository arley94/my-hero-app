import React from 'react';
import { Outlet } from 'react-router-dom';
import DrawerAppBar from '../components/ui/DrawerAppBar';
import Container from '@mui/material/Container';

const DashBoard = () => {
  return (
    <>
      <DrawerAppBar />
      <Container fixed>
        <Outlet />
      </Container>
    </>
  )
}

export default DashBoard