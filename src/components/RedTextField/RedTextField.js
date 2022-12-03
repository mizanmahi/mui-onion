import { styled, TextField } from '@mui/material';
import React, { forwardRef } from 'react';

const StyledTextField = styled(TextField)(({ theme }) => ({
   background: '#f5f5f5',
   borderRadius: '8px',
   '& .MuiOutlinedInput-root': {
      '& fieldset': {
         border: 'none',
      },
      '&:hover fieldset': {
         borderColor: theme.palette.primary.main,
      },
      '&.Mui-focused fieldset': {
         //  border: `1px solid ${theme.palette.primary.main}`,
      },
   },
}));

const RedTextField = (props, ref) => {
   return <StyledTextField {...props} inputRef={ref} />;
};

export default forwardRef(RedTextField);
