import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { CustomSelectProps, SelectInerface } from '../interface/customSelect.interface'
import { getAdhrents } from '../mock'

const SelectAdherent = ({ onSearch, onAdherentSelect }: CustomSelectProps) => {
  const [options, setOptions] = useState<SelectInerface[]>([])
  const [statusValue, setStatusValue] = useState('')
  const [isClearable, setIsClearable] = useState(true)
  //console.log('onAdherentSelect prop:', onAdherentSelect)
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
    //console.log('Adherent selected:', value)
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
        //  console.log('Change event triggered with value:', value)
        handleAdherentSelect(value)
      }}
      options={options}
      isClearable={isClearable}
    />
  )
}

export default SelectAdherent
