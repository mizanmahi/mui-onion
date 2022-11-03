import { createTheme } from '@mui/material';

export const theme = createTheme({
   palette: {
      primary: {
         main: '#f91944',
         secondary: '#191919',

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
            }
            
         }
      }
   },

   typography: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
   },
});
