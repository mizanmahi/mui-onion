import { createTheme } from '@mui/material';

export const theme = createTheme({
   palette: {
      primary: {
         main: '#f91944',
         secondary: '#191919',
         hover: '#ff9caf',
      },
   },
   components: {
      MuiContainer: {
         defaultProps: {
            maxWidth: 'xl',
         },
      },
      MuiButton: {
         styleOverrides: {
            root: {
               fontSize: '1rem',
               padding: '0.5rem 2rem',
               borderRadius: '40px',
               textTransform: 'capitalize',
            },
         },
         defaultProps: {
            variant: 'contained',
            color: 'primary',
            // disableRipple: true,
         },
      },
      MuiTypography: {
         styleOverrides: {
            root: {
               color: '#191919',
            },
         },
      },
   },

   typography: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
   },
});


// adding a box shadow the the theme shadows
theme.shadows.push(
   'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px'
);
