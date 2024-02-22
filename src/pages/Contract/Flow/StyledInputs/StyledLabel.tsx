import React from 'react'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'
import CustomTextFieldProps from 'src/shared-components/StyledTextField/Interfaces/CustomTextFiledInterface'

const StyledLabel = styled('label')({
  fontWeight: 'bold',
  fontSize: '13px',
  paddingBottom: '12px',
  marginBottom: '110px'
})

const StyledTextField = styled(TextField)(({ fullWidth }: CustomTextFieldProps) => ({
  '& .MuiInputBase-root': {
    padding: '7px',
    height: '40px',
    width: fullWidth ? '100%' : 'auto'
  },
  '& input::placeholder': {}
}))

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  name,
  placeholder,
  fullWidth,
  onChange,
  ...rest
}) => {
  return (
    <>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <br />
      <StyledTextField label={''} name={name} placeholder={label} {...rest} />
      <StyledTextField
        label={''}
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
