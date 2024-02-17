import React from 'react'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'

const StyledTextField = styled(TextField)(({}) => ({
  '& .MuiInputBase-root': {
    padding: '7px',
    height: '40px',
    width: '100%'
  },
  '& input::placeholder': {}
}))

const CustomTextField = ({ label, placeholder, ...rest }) => {
  return <StyledTextField label={label} placeholder={placeholder} {...rest} />
}

export default CustomTextField
