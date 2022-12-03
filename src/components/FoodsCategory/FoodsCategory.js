import React, { useState } from 'react';
import Container from '@mui/material/Container';
import TabButtons from '../TabButtons/TabButtons';
import Box from '@mui/material/Box';
import FoodCard from '../FoodCard/FoodCard';
import useMeals from '../../hooks/useMeals';
import Skeleton from '@mui/material/Skeleton';

const categories = ['breakfast', 'lunch', 'dinner'];

const FoodsCategory = () => {
   const [tabValue, setTabValue] = useState(0);

   const { meals, loading } = useMeals(categories[tabValue]);

   return (
      <Box
         sx={{
            width: '100%',
         }}
      >
         <Container>
            <Box
               sx={{
                  width: '100%',
                  maxWidth: '500px',
                  margin: '0 auto',
               }}
            >
               <TabButtons value={tabValue} setValue={setTabValue} />
            </Box>
            <Box
               sx={{
                  display: 'grid',
                  // auto-fit the card
                  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                  justifyItems: 'center',
                  gap: '20px',
                  mt: 8,
               }}
            >
               {!loading && meals.map((meal) => <FoodCard meal={meal} />)}

               {loading &&
                  Array.from(new Array(6)).map((item) => (
                     <Box sx={{ width: '350px', background: 'paper'}}>
                        <Skeleton
                           width={250}
                           height={250}
                           variant='circular'
                           sx={{
                              mx: 'auto'
                           }}
                        />
                        <Skeleton width={350} height={50} variant='text' />
                        <Skeleton width={350} height={100} variant='text' />
                        <Skeleton width={100} height={70} variant='text'  sx={{
                              mx: 'auto'
                           }} />
                     </Box>
                  ))}
            </Box>
         </Container>
      </Box>
   );
};

export default FoodsCategory;
