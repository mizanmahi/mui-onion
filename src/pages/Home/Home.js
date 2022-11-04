import { Box } from '@mui/material';
import React from 'react';
import FoodsCategory from '../../components/FoodsCategory/FoodsCategory';
import Hero from '../../components/Hero/Hero';

const Home = () => {
   return (
      <Box>
         <Hero />
         <FoodsCategory />
      </Box>
   );
};

export default Home;
