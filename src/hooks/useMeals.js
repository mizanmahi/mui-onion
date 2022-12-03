import { useEffect, useState } from 'react';
import { axiosInstance } from '../utils/axiosInstance';

const useMeals = (category) => {
   const [meals, setMeals] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState('');

   useEffect(() => {
      let url = 'meals';
      if (category) {
         url = `${url}/${category}`;
      }

      const fetchProduct = async () => {
         setLoading(true);
         try {
            const { status, data } = await axiosInstance.get(url);
            if (status === 200) {
               setLoading(false);
               setMeals(data);
               console.log(data);
            }
         } catch (error) {
            setLoading(false);
            setError(error.response.data.message);
         }
      };

      fetchProduct();
   }, [category]);

   return {
      meals,
      loading,
      error,
   };
};

export default useMeals;
