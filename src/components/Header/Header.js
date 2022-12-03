import React from 'react';
import {
   Badge,
   Box,
   Button,
   Container,
   IconButton,
   Stack,
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import LogoutIcon from '@mui/icons-material/Logout';
import { useCart } from '../../hooks/useCart';

const Header = () => {
   const { user, logoutUser } = useAuth();
   const { cart } = useCart();
   const navigate = useNavigate();

   // console.log(cart);
   // console.log(user);

   const quantity = cart.reduce((acc, curr) => curr.quantity + acc, 0);

   const handleLogout = () => {
      logoutUser();
   };

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
            <Box component={Link} to='/'>
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
               <Badge
                  badgeContent={quantity}
                  color='primary'
                  onClick={() => navigate('/checkout')}
                  sx={{
                     cursor: 'pointer',
                     '&:hover': {
                        '& > svg': {
                           color: 'primary.main',
                        },
                     },
                  }}
               >
                  <ShoppingCartOutlinedIcon />
               </Badge>
               {!user && (
                  <>
                     <Button
                        to='/login'
                        component={Link}
                        variant='text'
                        sx={{
                           textDecoration: 'none',
                           fontSize: '1rem',
                           fontWeight: '600',
                        }}
                     >
                        Sign In
                     </Button>

                     <Button to='/register' component={Link}>
                        Sign up
                     </Button>
                  </>
               )}

               {user && (
                  <>
                     <Button variant='text'>{user.displayName}</Button>
                     <IconButton onClick={handleLogout}>
                        <LogoutIcon />
                     </IconButton>
                  </>
               )}
            </Stack>
         </Box>
      </Container>
   );
};

export default Header;
