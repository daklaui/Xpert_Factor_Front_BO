<<<<<<< HEAD

import React from 'react'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'
import CustomTextFieldProps from 'src/shared-components/StyledTextField/Interfaces/CustomTextFiledInterface'
import StyledLabel from 'src/pages/Contract/Flow/StyledInputs/StyledLabel'
const StyledTextField : any = styled(TextField)(({ fullWidth }: CustomTextFieldProps) => ({
  '& .MuiInputBase-root': {
    padding: '7px',
    height: '40px',
    width: fullWidth ? '100%' : 'auto'
  },
  '& input::placeholder': {}
}))
const CustomTextField: React.FC<CustomTextFieldProps> = ({ label, name, placeholder, fullWidth, onChange, ...rest }) => {
=======
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

>>>>>>> dbfb9e274c0325b31c34f36fce7a87353e15c5ef
  return (
    <>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <br />
<<<<<<< HEAD
      <StyledTextField
        name={name}
        placeholder={placeholder || label}
        fullWidth={fullWidth}
        onChange={onChange}
        {...rest}
      />
    </>
  )
}
export default CustomTextField
=======
      {renderField}
    </>
  );
};

export default CustomTextField;
>>>>>>> dbfb9e274c0325b31c34f36fce7a87353e15c5ef
