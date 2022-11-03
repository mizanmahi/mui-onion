import React from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <Container>
         <Box
            sx={{
               display: 'flex',
               justifyContent: 'space-between',
               alignItems: 'center',
               padding: '2rem 0',
            }}
         >
            <Box>
               <img
                  src='https://i.ibb.co/GV0gqff/logo2.png'
                  alt='Logo'
                  style={{
                     width: '160px',
                  }}
               />
            </Box>
            <Stack
               direction='row'
               spacing={4}
               sx={{
                  alignItems: 'center',
               }}
            >
               <ShoppingCartOutlinedIcon />
               <Typography
                  to='/login'
                  component={Link}
                  sx={{
                     textDecoration: 'none',
                     fontSize: '1rem',
                     fontWeight: '600',
                  }}
               >
                  Login
               </Typography>

               <Button>Sign up</Button>
            </Stack>
         </Box>
      </Container>
   );
};

export default Header;
