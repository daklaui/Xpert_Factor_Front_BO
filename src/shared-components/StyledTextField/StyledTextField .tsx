import React from 'react'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'
import CustomTextFieldProps from './Interface/CustomTextFieldInterface'
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
  return (
    <>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <br />
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
