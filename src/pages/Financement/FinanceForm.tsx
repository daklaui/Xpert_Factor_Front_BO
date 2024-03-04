import {
  Box,
  Button,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Select
} from '@mui/material'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import DatePicker from 'react-datepicker'
import CustomTextField from '../Contract/Flow/StyledInputs/StyledLabel'
import { useState } from 'react'
import { DateType } from 'src/types/forms/reactDatepickerTypes'

const FinanceForm = () => {
  const [date, setDate] = useState<DateType>(new Date())
  const [TypeFinancement] = useState()

  return (
    <CardContent>
      <form onSubmit={e => e.preventDefault()}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <p>Financement :</p>
            <CustomTextField name={'Financement'} value='Financement' />
          </Grid>
          <Grid item xs={12}>
            <p>Numero de l'instrument de financement: :</p>
            <CustomTextField name={'NumFinance'} value='NumFinance' />
          </Grid>
          <Grid item xs={12}>
            <p>Type de financement</p>
            <FormControl>
              <Select placeholder='Cheque' value={TypeFinancement}>
                <MenuItem value='Cheque'>Cheque</MenuItem>
                <MenuItem value='Virement'>Virement</MenuItem>
                <MenuItem value='Billet a ordre'>Billet a ordre</MenuItem>
                <MenuItem value='Cheque/Traite'>Cheque/Traite</MenuItem>
                <MenuItem value='Traite'>Traite</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <p>Date de l'instrument de financement :</p>
            <DatePickerWrapper>
              <DatePicker selected={date} onChange={(date: Date) => setDate(date)} customInput={<CustomInput />} />
            </DatePickerWrapper>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel label='Financement' control={<Checkbox name='basic-unchecked' />} />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel label='Liberation FDG' control={<Checkbox name='basic-unchecked' />} />
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                gap: 5,
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Button type='submit' variant='contained' size='large'>
                Valider Financement
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}
export default FinanceForm
