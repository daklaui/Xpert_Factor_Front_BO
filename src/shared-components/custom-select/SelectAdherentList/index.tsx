import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { CustomSelectProps, SelectInerface } from '../interface/customSelect.interface'
import { getAdhrents } from '../mock'

const SelectAdherent = ({ onSearch }: CustomSelectProps) => {
  const [options, setOptions] = useState<SelectInerface[]>([])
  const [statusValue, setStatusValue] = useState('')
  const [isClearable] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAdhrents()
        setOptions(response.options)
      } catch (error) {
        console.error('Erreur lors de la récupération des options :', error)
      }
    }

    fetchData()
  }, [])

  return (
    <Select
      placeholder={'---Sélectionnez un adhérent---'}
      defaultValue={statusValue}
      onChange={(value: any) => {
        onSearch ? onSearch(value) : setStatusValue(value)
      }}
      options={options}
      isClearable={isClearable}
    />
  )
}

export default SelectAdherent
