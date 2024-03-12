import { Button, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import TextField from '@mui/material/TextField'
import { forwardRef, useState } from 'react'
import { DateType } from 'src/types/forms/reactDatepickerTypes'
import DatePicker from 'react-datepicker'

// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

const FormAddImpaye = () => {
  const valuesAdherentName = [
    {
      value: 'malek bachta',
      label: 'malek bachta'
    },
    {
      value: 'malek bachta',
      label: 'malek bachta'
    }
  ]
  const CustomInput = forwardRef((props, ref) => {
    return <TextField fullWidth {...props} inputRef={ref} label='Date impayé :' autoComplete='off' />
  })
  const [date, setDate] = useState<DateType>(null)

  return (
    <Card>
      <CardHeader title='Impayé' />
      <Grid container spacing={6} padding={6}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id='form-layouts-tabs-select-label'>Nom Adhérent:</InputLabel>
            <Select
              label='Nom Adhérent:'
              defaultValue=''
              id='form-layouts-tabs-select'
              labelId='form-layouts-tabs-select-label'
            >
              {valuesAdherentName.map((valuesAdherentName, index) => (
                <MenuItem key={index} value={valuesAdherentName.value}>
                  {valuesAdherentName.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <DatePicker
            selected={date}
            showYearDropdown
            showMonthDropdown
            placeholderText='MM-DD-YYYY'
            customInput={<CustomInput />}
            id='form-layouts-separator-date'
            onChange={(date: Date) => setDate(date)}
          />
        </Grid>
      </Grid>
      <Grid container spacing={6} padding={6}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id='form-layouts-tabs-select-label'>Nom Acheteur:</InputLabel>
            <Select
              label='Nom Acheteur:'
              defaultValue=''
              id='form-layouts-tabs-select'
              labelId='form-layouts-tabs-select-label'
            >
              {valuesAdherentName.map((valuesAdherentName, index) => (
                <MenuItem key={index} value={valuesAdherentName.value}>
                  {valuesAdherentName.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <TextField fullWidth type='number' label='Montant impayé:' />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id='form-layouts-tabs-select-label'>Encaissement:</InputLabel>
            <Select
              label='Encaissement:'
              defaultValue=''
              id='form-layouts-tabs-select'
              labelId='form-layouts-tabs-select-label'
            >
              {valuesAdherentName.map((valuesAdherentName, index) => (
                <MenuItem key={index} value={valuesAdherentName.value}>
                  {valuesAdherentName.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Grid container justifyContent='flex-end'>
            <FormControl>
              <Button type='submit' variant='contained' size='large'>
                Valider
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  )
}

export default FormAddImpaye
