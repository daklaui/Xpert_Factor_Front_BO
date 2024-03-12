import Grid from '@mui/material/Grid'

import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import FormAddImpaye from './FormAddImpaye'

const index = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <FormAddImpaye />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default index
