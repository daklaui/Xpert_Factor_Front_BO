import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { CustomSelectProps, SelectInerface } from '../interface/customSelect.interface'
import { getListOfBanks } from '../mock'
import useCustomSelectStyles from '../../StyledInputs/CustomSelectStyles';

const SelectBanks = ({ onSearch }: CustomSelectProps) => {
  const [options, setOptions] = useState<SelectInerface[]>([])
  const [statusValue, setStatusValue] = useState('')
  const [isClearable, ] = useState(true)
  const customStyles = useCustomSelectStyles();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getListOfBanks()
        setOptions(response.options)
      } catch (error) {
        console.error('Erreur lors de la récupération des options :', error)
      }
    }

    fetchData()
  }, [])

  return (
    <Select
      placeholder={'---Sélectionnez une banque---'}
      defaultValue={statusValue}
      onChange={(value: any) => {
        onSearch ? onSearch(value) : setStatusValue(value)
      }}
      options={options}
      isClearable={isClearable}
      styles={customStyles}
    />
  )
}

export default SelectBanks
