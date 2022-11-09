import { Box } from '@mui/material';
import React from 'react';
import Features from '../../components/Features/Features';
import FoodsCategory from '../../components/FoodsCategory/FoodsCategory';
import Hero from '../../components/Hero/Hero';

const Home = () => {
   return (
      <Box>
         <Hero />
         <FoodsCategory />
         <Features />
      </Box>
   );
};

export default Home;
