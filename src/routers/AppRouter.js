import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import DcScreen from '../components/dc/DcScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import LoginScreen from '../components/login/LoginScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';
import DashBoard from './DashBoard';
import ScrollToTop from '../components/helpers/ScrollToTop';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<DashBoard />}>
            <Route index element={<Navigate to="/marvel" replace />} />
            <Route path='marvel' element={<MarvelScreen />} />
            <Route path='dc' element={<DcScreen />} />
            <Route path='hero/:heroId' element={<HeroScreen />} />
            <Route path='search' element={<SearchScreen />} />
          </Route>
          <Route path='/login' element={<LoginScreen />} />
          <Route
            path="*"
            element={<Navigate to="/marvel" replace />}
          />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}

export default AppRouter

