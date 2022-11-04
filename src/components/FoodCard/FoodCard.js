import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const FoodCard = () => {
   return (
      <Box
         sx={{
            width: '100%',
            maxWidth: '350px',
            padding: '30px 20px',
            borderRadius: '10px',
            '&:hover': {
               cursor: 'pointer',
               boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            },
         }}
      >
         <Box
            sx={{
               mb: 3,
               width: '80%',
               margin: '0 auto',
            }}
         >
            <img
               src='https://i.ibb.co/3445BtT/breakfast1.png'
               alt='breakfast'
               style={{
                  width: '100%',
               }}
            />
         </Box>
         <Box>
            <Typography
               sx={{
                  fontWeight: 'bold',
                  textAlign: 'center',
               }}
               variant='h6'
            >
               Eggs Benedict
            </Typography>
            <Typography
               sx={{
                  textAlign: 'center',
                  color: '#8D8D8D',
               }}
            >
               How We Dream About Our Future
            </Typography>
            <Typography
               sx={{
                  textAlign: 'center',
                  mt: 2,
               }}
               variant='h5'
            >
               $ 25.99
            </Typography>
         </Box>
      </Box>
   );
};

export default FoodCard;
