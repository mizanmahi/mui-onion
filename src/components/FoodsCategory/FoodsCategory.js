import React from 'react';
import Container from '@mui/material/Container';
import TabButtons from '../TabButtons/TabButtons';
import Box from '@mui/material/Box';
import FoodCard from '../FoodCard/FoodCard';

const FoodsCategory = () => {
   return (
      <Box
         sx={{
            width: '100%',
            my: 5,
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
               <TabButtons />
            </Box>
            <Box sx={{
                display: 'grid',
                // auto-fit the card
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
                justifyItems: 'center',
                gap: '20px',
                my: 5,

            }}>
               <FoodCard />
               <FoodCard />
               <FoodCard />
               <FoodCard />
               <FoodCard />
               <FoodCard />
            </Box>
         </Container>
      </Box>
   );
};

export default FoodsCategory;
