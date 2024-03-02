import React from 'react'
import Select, { SingleValue } from 'react-select'
import { useTheme } from '@mui/material'

import Option from './SelectInterface'

interface StyledSelectProps {
  Options: Option[]
  handleSelectChange: (newValue: SingleValue<Option>) => Promise<void>
}

const StyledSelect: React.FC<StyledSelectProps> = ({ Options, handleSelectChange }) => {
  const theme = useTheme()

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      borderColor: state.isFocused ? theme.palette.primary.main : 'gray',
      boxShadow: state.isFocused ? `0 0 0 1px ${theme.palette.primary.main}` : 'none',
      '&:hover': {
        borderColor: theme.palette.primary.main
      }
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? theme.palette.primary.main : 'white',
      color: state.isSelected ? 'white' : 'black'
    })
  }

  return (
    <Select options={Options} styles={customStyles} onChange={handleSelectChange} placeholder='' isClearable required />
  )
}

export default StyledSelect
