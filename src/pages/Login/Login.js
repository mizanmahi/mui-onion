import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';

import icon2 from '../../assets/icon-2.png';
import icon4 from '../../assets/icon-4.png';
import icon5 from '../../assets/icon-5.png';
import icon6 from '../../assets/icon-6.png';
import RedTextField from '../../components/RedTextField/RedTextField';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';

const Login = () => {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm();

   const { loginWithEmailAndPassword, userLoading, authError } = useAuth();
   const navigate = useNavigate();

   const location = useLocation();

   const handleLogin = async ({ name, email, password }) => {
      await loginWithEmailAndPassword(email, password, location, navigate);
      reset();
   };

   return (
      <Box
         sx={{
            height: '90vh',
            width: '100%',

            position: 'relative',
            overflow: 'hidden',
         }}
      >
         <img
            src={icon2}
            alt='icon2'
            style={{
               position: 'absolute',
               top: 0,
               left: '0',
               transform: 'rotate(45deg)',
            }}
         />
         <img
            src={icon4}
            alt='icon4'
            style={{
               position: 'absolute',
               bottom: '100px',
               left: '0',
               transform: 'rotate(-45deg)',
            }}
         />
         <img
            src={icon5}
            alt='icon5'
            style={{
               position: 'absolute',
               bottom: '100px',
               right: '0',
               transform: 'rotate(-45deg)',
            }}
         />
         <img
            src={icon6}
            alt='icon6'
            style={{
               position: 'absolute',
               right: '0',
               transform: 'rotate(45deg)',
            }}
         />
         <Container>
            <Box
               sx={{
                  // background: '#f7f7f7',
                  width: '100%',
                  maxWidth: 500,
                  mx: 'auto',
                  mt: 10,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                  p: 2,
               }}
               component='form'
               onSubmit={handleSubmit(handleLogin)}
            >
               <Typography variant='h3' color='primary' textAlign='center'>
                  Sign In
               </Typography>

               <RedTextField
                  placeholder='Email'
                  {...register('email', {
                     pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'Invalid email address',
                     },
                     required: {
                        value: true,
                        message: 'Email is required',
                     },
                  })}
                  error={errors.email}
                  helperText={errors.email && errors.email.message}
               />
               <RedTextField
                  placeholder='Password'
                  {...register('password', {
                     required: {
                        value: true,
                        message: 'Please input a password',
                     },
                     minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters long',
                     },
                  })}
                  error={errors.password}
                  helperText={errors.password && errors.password.message}
               />

               <Link
                  to='/register'
                  style={{
                     color: '#f91944',
                  }}
               >
                  Don't have an account?
               </Link>

               <Button
                  sx={{
                     borderRadius: '8px',
                  }}
                  type='submit'
               >
                  Sign in
               </Button>

               <Typography sx={{ mt: 3, color: 'primary.main', textAlign: 'center' }}>
                  {authError ? authError : ''}
               </Typography>
            </Box>
         </Container>
      </Box>
   );
};

export default Login;
