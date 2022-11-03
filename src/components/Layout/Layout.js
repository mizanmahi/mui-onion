import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
   return (
      <>
         <Header />
         {
            // This is where the magic happens
            // The Outlet component will render the component that matches the current route
            <Outlet />
         }
         <Footer />
      </>
   );
};

export default Layout;
