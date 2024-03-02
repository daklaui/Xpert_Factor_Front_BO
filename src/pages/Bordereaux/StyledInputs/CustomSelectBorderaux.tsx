import { useTheme } from '@mui/material'
import React from 'react'
import Select, { ActionMeta, SingleValue } from 'react-select'

interface OptionType {
  label: string
  value: string
}

interface CustomSelectProps {
  options: OptionType[]
  handleSelectChange: (selectedOption: SingleValue<OptionType>, actionMeta: ActionMeta<OptionType>) => void
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, handleSelectChange }) => {
  const theme = useTheme()

  // Define custom styles for the select element
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
  const handleChange = (selectedOption: SingleValue<OptionType>, actionMeta: ActionMeta<OptionType>) => {
    handleSelectChange(selectedOption, actionMeta)
  }

  return (
    <Select
      options={options}
      onChange={handleChange}
      styles={customStyles} // Apply custom styles
    />
  )
}

export default CustomSelect
