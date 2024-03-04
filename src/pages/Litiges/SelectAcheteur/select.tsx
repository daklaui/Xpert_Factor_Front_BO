import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { CustomSelectProps, SelectInerface } from '../interface/customSelect.interface'
import { getAcheteurList } from '../Mock/acheteurList'

/*import { getAcheteurList } from '../Mock/acheteurList'
 */

const SelectAcheteur = ({ onSearch }: CustomSelectProps) => {
  const [options, setOptions] = useState<SelectInerface[]>([])
  const [statusValue, setStatusValue] = useState('')
  const [isClearable] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAcheteurList()
        setOptions(response.options)
      } catch (error) {
        console.error('Erreur lors de la récupération des options :', error)
      }
    }

    fetchData()
  }, [])

  return (
    <Select
      placeholder={'Sélectionnez un Acheteur'}
      defaultValue={statusValue}
      onChange={(value: any) => {
        onSearch ? onSearch(value) : setStatusValue(value)
      }}
      options={options}
      isClearable={isClearable}
      isSearchable
    />
  )
}

export default SelectAcheteur

/*
function getAcheteurList() {
  throw new Error('Function not implemented.')
}*/
