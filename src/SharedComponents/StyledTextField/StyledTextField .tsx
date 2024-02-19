import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const StyledLabel = styled('label')({
  fontWeight: 'bold',
  fontSize: '13px',
  paddingBottom: '12px',
  marginBottom: '110px',
});

const StyledTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    width: '100%', // Assurez-vous que le width est bien défini à 100%
    height: '40px',
    '& .MuiInputBase-input::placeholder': {
      color: '#5d5a68',
    },

    '& input': {
      padding: '7px',
      height: '100%',
    },
  },
});


const CustomTextField = ({ label, name, correctValue, placeholder, ...rest }) => {
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  const handleInputChange = (event : any) => {
    const inputValue = event.target.value;
    setIsErrorVisible(inputValue !== correctValue);
  };

  return (
    <>
      <StyledLabel htmlFor='name'>{label} </StyledLabel>
      <StyledTextField
        name={name}
        onChange={handleInputChange}
        placeholder={placeholder}
        error={isErrorVisible}
        helperText={isErrorVisible ? 'Incorrect value' : ''}
        {...rest}
      />
    </>
  );
};

export default CustomTextField;
