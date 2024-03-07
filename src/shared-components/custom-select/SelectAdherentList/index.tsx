import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { CustomSelectProps, SelectInerface } from '../interface/customSelect.interface'
import { getAdhrents } from '../mock'
import useCustomSelectStyles from '../../StyledInputs/CustomSelectStyles';

const SelectAdherent = ({ onAdherentSelect }: CustomSelectProps) => {
  const [options, setOptions] = useState<SelectInerface[]>([])
  const [statusValue, setStatusValue] = useState('')
  const [isClearable, ] = useState(true)
  const customStyles = useCustomSelectStyles();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAdhrents()
        setOptions(response.options)
      } catch (error) {
        console.error('Error fetching adherents:', error)
      }
    }

    fetchData()
  }, [])

  const handleAdherentSelect = (value: any) => {
    if (onAdherentSelect) {
      onAdherentSelect(value)
    } else {
      setStatusValue(value)
    }
  }

  return (
    <Select
      placeholder={'---Sélectionnez un adhérent---'}
      defaultValue={statusValue}
      onChange={(value: any) => {

        handleAdherentSelect(value)
      }}
      options={options}
      isClearable={isClearable}
      styles={customStyles}
    />
  )
}

export default SelectAdherent
