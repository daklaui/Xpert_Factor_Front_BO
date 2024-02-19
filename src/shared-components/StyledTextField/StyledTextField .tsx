import React from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { Controller } from 'react-hook-form';

const StyledLabel = styled('label')({
  fontWeight: 'bold',
  fontSize: '13px',
  paddingBottom: '12px',
  marginBottom: '110px',
});

const StyledTextField = styled(TextField)(({}) => ({
  '& .MuiInputBase-root': {
    padding: '7px',
    height: '40px',
    width: '100%',
  },
  '& input::placeholder': {}
}));

const CustomTextField = ({ label, name, control, placeholder, helperMessage, field, ...rest } ) => {
  const renderField = field ? field : (
    <Controller
      name={name}
      control={control}
      rules={{
        required: true,
      }}
      render={({ field, fieldState }) => (
        <StyledTextField
          {...field}
          placeholder={label}
          error={fieldState.invalid}
          helperText={fieldState.invalid ? helperMessage : ''}
          {...rest}
        />
      )}
    />
  );

  return (
    <>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <br />
      {renderField}
    </>
  );
};

export default CustomTextField;
