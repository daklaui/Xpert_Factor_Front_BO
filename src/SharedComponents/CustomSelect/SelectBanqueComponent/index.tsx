import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Select from 'react-select'
import { getOptions } from './mockBanque'
import { CustomSelectProps, SelectInerface } from '../interface/customSelect.interface'

const SelectBanque = ({ onSearch, labelText }: CustomSelectProps) => {
  const [options, setOptions] = useState<SelectInerface[]>([])
  const [statusValue, setStatusValue] = useState('')
  const [isClearable, setIsClearable] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getOptions()
        setOptions(response.options)
      } catch (error) {
        console.error('Erreur lors de la récupération des options :', error)
      }
    }

    fetchData()
  }, [])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6}>
        <Select
          placeholder={'---Sélectionnez une banque---'}
          defaultValue={statusValue}
          onChange={(value: any) => {
            onSearch ? onSearch(value) : setStatusValue(value)
            labelText
          }}
          options={options}
          isClearable={isClearable}
        />
      </Grid>
    </Grid>
  )
}

export default SelectBanque
