import { useTheme } from '@mui/material';
import React from 'react';
import Select from 'react-select';

const StyledSelect = () => {
  const theme = useTheme();

  const customStyles = {
    control: (provided : any, state : any) => ({
      ...provided,
      borderColor: state.isFocused ? theme.palette.primary.main : 'gray',
      boxShadow: state.isFocused ? `0 0 0 1px ${theme.palette.primary.main}` : 'none',
      '&:hover': {
        borderColor: theme.palette.primary.main,
      },
    }),
    option: (provided : any, state : any) => ({
      ...provided,
      backgroundColor: state.isSelected ? theme.palette.primary.main : 'white',
      color: state.isSelected ? 'white' : 'black',
    }),
  };
  
  return (
    <Select
      styles={customStyles}
    />
  );
};

export default StyledSelect
