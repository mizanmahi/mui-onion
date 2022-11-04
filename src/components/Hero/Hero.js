import { Box, Typography } from '@mui/material';
import React from 'react';

const Hero = () => {
   return (
      <Box
         sx={{
            height: '70vh',
            width: '100%',
            background: 'url(https://i.ibb.co/6RTZ812/bannerbackground.png)',
            backgroundSize: '110%',
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
            <Typography variant='h2' fontWeight={600} mb={4}>
               Best food waiting for your belly
            </Typography>
            <Box
               sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '600px',
                  margin: '0 auto',
                  background: '#FFFFFF',
                  borderRadius: '50px',
                  overflow: 'hidden',
                  '& input': {
                     border: 'none',
                     outline: 'none',
                     padding: '1rem 2rem',
                     width: '100%',
                     borderRadius: '30px',
                     fontSize: '1.2rem',
                  },
                  '& button': {
                     position: 'absolute',
                     right: '0',
                     top: '0',
                     background: '#F91944',
                     border: 'none',
                     outline: 'none',
                     padding: '1rem 2rem',
                     color: '#FFFFFF',
                     fontSize: '1.2rem',
                     borderRadius: '30px',
                     cursor: 'pointer',
                  },
               }}
            >
               <input
                  type='search'
                  alt='search food'
                  placeholder='Search food'
               />
               <button>Search</button>
            </Box>
         </Box>
      </Box>
   );
};

export default Hero;
