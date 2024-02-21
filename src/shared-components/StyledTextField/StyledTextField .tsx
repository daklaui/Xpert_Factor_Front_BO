import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'

const StyledLabel = styled('label')({
  fontWeight: 'bold',
  fontSize: '13px',
  paddingBottom: '12px',
  marginBottom: '110px'
})

const StyledTextField = styled(TextField)(({}) => ({
  '& .MuiInputBase-root': {
    padding: '7px',
    height: '40px',
    width: '100%'
  },
  '& input::placeholder': {}
}))

const CustomTextField = ({ label, name, placeholder, ...rest }) => {
  return (
    <>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <br />
      <StyledTextField name={name} placeholder={label} {...rest} />
    </>
  )
}

export default CustomTextField
