import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material';

const CustomTabs = styled(Tabs)(({ theme }) => ({
   // boxShadow:
   //    'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
   borderRadius: '15px',
   padding: '5px',

   // '& .MuiTabs-indicator': {
   //    backgroundColor: '#FFC107',
   //    display: 'none',
   // },

   '& .MuiTabs-flexContainer': {
      justifyContent: 'space-between',
   },
   '& .MuiTab-root': {
      textTransform: 'capitalize',
      border: '1px solid transparent',
      color: '#000',
      '&:hover': {
         color: theme.palette.primary.main,
         borderRadius: '15px',
      },
   },
   '& .Mui-selected': {
      // backgroundColor: theme.palette.primary.main,
      // color: '#ffffff !important',
      borderRadius: '15px',
   },
}));

export default function TabButtons({value, setValue}) {

   const handleChange = (e, newValue) => {
      console.log(newValue);
      setValue(newValue);
   };

   return (
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
         <CustomTabs value={value} onChange={handleChange} centered>
            <Tab label='Breakfast' />
            <Tab label='Lunch' />
            <Tab label='Dinner' />
         </CustomTabs>
      </Box>
   );
}
