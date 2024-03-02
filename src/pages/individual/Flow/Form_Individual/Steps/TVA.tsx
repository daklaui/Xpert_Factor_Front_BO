import { Box, FormControlLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material'
import { Fragment, useState } from 'react'
import DatePicker from 'react-datepicker'
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Custom Component Imports
import CustomInput from '../PickersCustomInput'
import StyledLabel from 'src/pages/Contract/Flow/StyledInputs/StyledLabel'

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
    <Fragment>
      <Grid sm={1.5}></Grid>
      <Grid item sm={3}>
        <CustomTextField
          fullWidth
          label={'Code TVA '}
          name={'Code_TVA'}
          placeholder={'Tapez code '}
          value={companyData.Code_TVA}
          onChange={e => handleChange('Code_TVA', e.target.value)}
        />
      </Grid>
      <Grid sm={1}></Grid>
      <Grid item sm={3}>
        Exonération TVA
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
      <Grid item xs={12} sm={3}>
        Date Début Exonération
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <div>
            <DatePicker selected={date} onChange={(date: Date) => setDate(date)} customInput={<CustomInput />} />
          </div>
        </Box>
      </Grid>
      <Grid sm={8.5}></Grid>
      <Grid item xs={12} sm={3}>
        Date Fin Exonération
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <div>
            <DatePicker selected={date} onChange={(date: Date) => setDate(date)} customInput={<CustomInput />} />
          </div>
        </Box>
      </Grid>
    </Fragment>
  )
}

export default TVA
