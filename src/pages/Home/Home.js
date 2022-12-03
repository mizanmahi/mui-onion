import { Box, Stack } from '@mui/material';
import React from 'react';
import Features from '../../components/Features/Features';
import FoodsCategory from '../../components/FoodsCategory/FoodsCategory';
import Hero from '../../components/Hero/Hero';

const Home = () => {
   return (
      <Stack direction='column' spacing={10} mb={4}>
         <Hero />
         <FoodsCategory />
         <Features />
      </Stack>
   );
};

export default Home;
