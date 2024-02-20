import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import {  Grid, InputLabel, TextField } from '@mui/material'
import SelectAdherent from 'src/shared-components/custom-select/SelectAdherentList'
import styled from '@emotion/styled'
import SelectIndividus from 'src/shared-components/custom-select/SelectIndividuals'
import DatePicker from 'react-datepicker'
import CustomInput from './PickersComponent'
import { DateType } from 'src/types/forms/reactDatepickerTypes'
import { useState } from 'react'

const InfoAcheteur = ({  }) => {
  const [date, setDate] = useState<DateType>(new Date())

  const StyledLabel = styled('label')({
    fontWeight: 'bold',
    fontSize: '13px',
    paddingBottom: '12px'
  })

  const StyledDatePicker = styled(DatePicker)({
    '& .MuiInputBase-root': {
      backgroundColor: '#f5f5f5',
      borderRadius: '4px',
      width: '295px',
      height: '40px',
      '& input': {
        padding: '8px',
        fontSize: '14px',
        width: '220px',
        marginTop: '8px'
      }
    },
    '& .MuiPickersDay-daySelected': {
      backgroundColor: '#5d5a68',
      color: '#fff'
    }
  })

  const handleSearch = (value: any) => {
    console.log('Selected value:', value)
  }

  return (
    <Card>
      <CardContent>
        <form>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <InputLabel
                htmlFor='Nom Adhérent'
                sx={{ mb: 2, fontSize: 16, maxWidth: 'max-content', fontWeight: 'bold' }}
              >
                <strong>Nom Adhérent</strong>
              </InputLabel>
              <SelectAdherent onSearch={handleSearch} labelText='Select Adherent' />
            </Grid>
            <Grid item xs={12}>
              <InputLabel
                htmlFor='Nom Individu'
                sx={{ mb: 2, fontSize: 16, maxWidth: 'max-content', fontWeight: 'bold' }}
              >
                <strong>Nom Individu</strong>
              </InputLabel>
              <SelectIndividus onSearch={handleSearch} labelText='Select individu' />
            </Grid>
            <Grid item xs={12} sm={6}>
            <InputLabel
                htmlFor='Nom Individu'
                sx={{ mb: 2, fontSize: 16, maxWidth: 'max-content', fontWeight: 'bold' }}
              >
                <strong>Nom Individu</strong>
              </InputLabel>
                  <DatePicker
                    selected={date}
                    id='basic-input'
                    onChange={(date: Date) => setDate(date)}
                    placeholderText='Click to select a date'
                    customInput={<CustomInput label='Basic' />}
                  />
               
              

           
            </Grid>

            <Grid item xs={12} sm={6}>
            <InputLabel
                htmlFor='Nom Individu'
                sx={{ mb: 2, fontSize: 16, maxWidth: 'max-content', fontWeight: 'bold' }}
              >
                <strong>Nom Individu</strong>
              </InputLabel>
              <DatePicker
                    selected={date}
                    id='basic-input'
                    onChange={(date: Date) => setDate(date)}
                    placeholderText='Click to select a date'
                    customInput={<CustomInput label='Basic' />}
                  /></Grid>
            <Grid item xs={12} sm={6}>
            <TextField fullWidth defaultValue='Capholim' label='State' />

            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField fullWidth defaultValue='Capholim' label='State' />

            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}
export default InfoAcheteur
