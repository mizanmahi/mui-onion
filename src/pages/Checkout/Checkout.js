import React from 'react';
import {
   Box,
   Button,
   Container,
   Divider,
   Stack,
   Typography,
} from '@mui/material';
import { FlexBox } from '../../components/styled';
import RedTextField from '../../components/RedTextField/RedTextField';
import { useForm } from 'react-hook-form';
import { useCart } from '../../hooks/useCart';
import MealBox from './MealBox';

const Checkout = () => {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm();

   const { cart } = useCart();

   return (
      <Box sx={{ my: 8 }}>
         <Container maxWidth='lg'>
            <FlexBox
               justifyContent='space-between'
               sx={{
                  flexDirection: ['column-reverse', 'column-reverse', 'row'],
               }}
            >
               {/* details form */}
               <Box sx={{ width: '100%', maxWidth: '500px' }}>
                  <Typography variant='h5'>Enter Delivery Details</Typography>
                  <Divider sx={{ mt: 1, mb: 3 }} />
                  <Stack component='form' spacing={3}>
                     <RedTextField
                        placeholder='Road no.'
                        {...register('road', {
                           required: {
                              value: true,
                              message: 'Road no is required',
                           },
                        })}
                        error={errors.road}
                        helperText={errors.road && errors.road.message}
                     />
                     <RedTextField
                        placeholder='Flat suit or floor'
                        {...register('flat', {
                           required: {
                              value: true,
                              message: 'Flat or suit is required',
                           },
                        })}
                        error={errors.flat}
                        helperText={errors.flat && errors.flat.message}
                     />
                     <RedTextField
                        placeholder='Business Name'
                        {...register('businessName', {
                           required: {
                              value: true,
                              message: 'Business name is required',
                           },
                        })}
                        error={errors.businessName}
                        helperText={
                           errors.businessName && errors.businessName.message
                        }
                     />
                     <RedTextField
                        placeholder='Delivery Instruction'
                        {...register('deliveryInstruction', {
                           required: {
                              value: true,
                              message: 'Delivery instruction is required',
                           },
                        })}
                        error={errors.deliveryInstruction}
                        helperText={
                           errors.deliveryInstruction &&
                           errors.deliveryInstruction.message
                        }
                     />
                     <Button fullWidth sx={{ borderRadius: '8px' }}>
                        Save & Place Order
                     </Button>
                  </Stack>
               </Box>
               {/* meal details */}
               <Box sx={{ mb: [2, 2, 0] }}>
                  <Stack spacing={2}>
                     <Typography variant='h6'>
                        <strong>From: </strong> Hero Cafe
                     </Typography>
                     <Typography variant='h6'>
                        <strong>Arriving: </strong> in 20 - 30 mins
                     </Typography>
                     <Typography variant='h6'>
                        <strong>Road: </strong> 107/a
                     </Typography>
                  </Stack>

                  <Box sx={{ my: 2 }}>
                     {cart.map((meal) => (
                        <MealBox meal={meal} />
                     ))}
                  </Box>
                  <FlexBox justifyContent='space-between' p={1}>
                     <Typography variant='h5'>Total</Typography>
                     <Typography fontWeight={600}>
                        ${cart.reduce((acc, curr) => (acc += curr.price), 0)}
                     </Typography>
                  </FlexBox>
               </Box>
            </FlexBox>
         </Container>
      </Box>
   );
};

export default Checkout;
