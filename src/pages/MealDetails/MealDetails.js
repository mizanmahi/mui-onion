import {
   Box,
   Container,
   Stack,
   styled,
   Typography,
   Button,
} from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FlexBox } from '../../components/styled';
import useMealById from '../../hooks/useMealById';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MealSlider from '../../components/MealSlider/MealSlider';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useCart } from '../../hooks/useCart';

export const CounterBox = styled(Box)(({ theme }) => ({
   borderRadius: '20px',
   border: `1px solid #e1e1e1`,
   width: '130px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   gap: '1rem',
   marginLeft: '1.5rem',
   padding: '2px 6px',
   '& > svg': {
      cursor: 'pointer',
   },
   '& > svg:hover': {
      color: theme.palette.primary.main,
   },
}));

const MealDetails = () => {
   const { mealId } = useParams();

   const { meal, loading } = useMealById(mealId);
   const { setCart } = useCart();

   const [quantity, setQuantity] = useState(1);

   const addToCartHandler = () => {
      setCart((cart) => [
         ...cart,
         {
            ...meal,
            quantity,
         },
      ]);
   };

   const adjustQuantity = (type) => {
      setQuantity(type === 'add' ? quantity + 1 : quantity - 1);
      setCart((cart) =>
         cart.map((item) => {
            if (item._id === meal._id) {
               return {
                  ...item,
                  quantity:
                     type === 'add' ? item.quantity + 1 : item.quantity - 1,
               };
            }

            return item;
         })
      );
   };

   if (loading) return <h2>Loading ...</h2>;

   return (
      <Box>
         <Container>
            <FlexBox sx={{ my: 5, gap: 10 }}>
               <Box sx={{ flex: 1 }}>
                  <Stack
                     direction='column'
                     spacing={4}
                     sx={{ width: 'fit-content', mx: 'auto' }}
                  >
                     <Typography variant='h4' fontWeight={600}>
                        {meal.title}
                     </Typography>
                     <Typography
                        variant='body'
                        color='primary.greyText'
                        sx={{
                           width: 450,
                        }}
                     >
                        {meal.description}
                     </Typography>
                     <FlexBox>
                        <Typography variant='h4' fontWeight={400}>
                           ${meal.price}
                        </Typography>
                        <CounterBox>
                           <RemoveIcon
                              onClick={() => adjustQuantity('remove')}
                           />
                           <Typography
                              variant='h5'
                              sx={{ width: '20px' }}
                              fontWeight={600}
                           >
                              {quantity}
                           </Typography>

                           <AddIcon onClick={() => adjustQuantity('add')} />
                        </CounterBox>
                     </FlexBox>
                     <Button
                        sx={{ width: ['100%', '100%', '40%'] }}
                        startIcon={<ShoppingCartOutlinedIcon />}
                        onClick={addToCartHandler}
                     >
                        Add
                     </Button>
                  </Stack>

                  {/* slider */}
                  <Box sx={{ mt: 10 }}>
                     <MealSlider images={meal?.images} />
                  </Box>
               </Box>
               <Box sx={{ flex: 1 }}>
                  <img
                     src={meal.defaultImage}
                     alt='meal'
                     style={{
                        maxWidth: '100%',
                        width: '500px',
                        margin: '0 auto',
                        display: 'block',
                     }}
                  />
               </Box>
            </FlexBox>
         </Container>
      </Box>
   );
};

export default MealDetails;
