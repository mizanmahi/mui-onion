import { Box, Typography } from '@mui/material';
import React from 'react';

const Hero = () => {
   return (
      <Box
         sx={{
            height: '70vh',
            width: '100%',
            background: 'url(https://i.ibb.co/6RTZ812/bannerbackground.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
         }}
      >
         <Box
            sx={{
               position: 'absolute',
               top: '50%',
               left: '50%',
               transform: 'translate(-50%, -50%)',
            }}
         >
            <Typography variant='h3'>
               Best food waiting for your belly
            </Typography>
         </Box>
      </Box>
   );
};

export default Hero;
