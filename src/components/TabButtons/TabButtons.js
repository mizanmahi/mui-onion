import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function TabButtons() {
   const [value, setValue] = React.useState(0);

   const handleChange = (e, newValue) => {
      console.log(newValue);
      setValue(newValue);
   };

   return (
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
         <Tabs
            sx={{
               boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
               borderRadius: '10px',
               '& .MuiTabs-indicator': {},
               '& .MuiTabs-flexContainer': {
                  justifyContent: 'space-between',
               },
               '& .MuiTabs-scroller': {},
               '& .Mui-selected': {},
            }}
            value={value}
            onChange={handleChange}
            centered
         >
            <Tab label='Breakfast' />
            <Tab label='Lunch' />
            <Tab label='Dinner' />
         </Tabs>
      </Box>
   );
}
