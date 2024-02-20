import { Box, FormControlLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import CustomTextField from 'src/@core/components/mui/text-field'
// ** Custom Component Imports
import CustomInput from '../PickersCustomInput'

const TVA = () => {
  const [companyData, setCompanyData] = useState({
    Code_TVA: '',
    ExonerationTVA: '',
    selectDisabled: false
  })
  const [date, setDate] = useState(new Date())

  const handleChange = (field: string, value: string | Date): void => {
    setCompanyData(prevData => ({
      ...prevData,
      [field]: value,
      selectDisabled: field === 'ExonerationTVA' ? value === 'Non' : prevData.selectDisabled
    }))
  }

  return (
    <>
      <Grid item xs={12} sm={6}>
        <CustomTextField
          label={'Code TVA '}
          name={'Code_TVA'}
          placeholder={'Tapez code '}
          value={companyData.Code_TVA}
          onChange={e => handleChange('Code_TVA', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <p>Exonération TVA</p>
        <RadioGroup
          row
          name='ExonerationTVA'
          onChange={event => handleChange('ExonerationTVA', event.target.value)}
          value={companyData.ExonerationTVA}
        >
          <FormControlLabel value='Oui' control={<Radio />} label='Oui' />
          <FormControlLabel value='Non' control={<Radio />} label='Non' />
        </RadioGroup>
      </Grid>
      <Grid item xs={12} sm={6}>
        <p>Date Début Exonération </p>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <div>
            <DatePicker selected={date} onChange={(date: Date) => setDate(date)} customInput={<CustomInput />} />
          </div>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <p>Date Fin Exonération</p>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <div>
            <DatePicker selected={date} onChange={(date: Date) => setDate(date)} customInput={<CustomInput />} />
          </div>
        </Box>
      </Grid>
    </>
  )
}

export default TVA
