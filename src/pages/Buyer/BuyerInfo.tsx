import { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Button, Grid, Typography } from '@mui/material'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import { DateType } from 'src/types/forms/reactDatepickerTypes'
import PickersComponent from './PickersComponent'
import CustomTextField from 'src/@core/components/mui/text-field'
import SelectIndividus from 'src/shared-components/custom-select/SelectIndividuals'
import SelectAdherent from 'src/shared-components/custom-select/SelectAdherentList'
import StyledDatePicker from '../../shared-components/StyledInputs/StyledDatePicker'
import StyledLabel from 'src/shared-components/StyledInputs/StyledLabel'

const BuyerInfo = ({ onAdherentSelect }) => {
  const [date, setDate] = useState<DateType>(new Date())
  const [MontantFinancement, setMontantFinancement] = useState()
  const [MontantAssurance, setMontantAssurance] = useState()
  const [, setSelectedAdherent] = useState(null)

  const handleAdherentSelect = adherent => {
    setSelectedAdherent(adherent)
    onAdherentSelect(adherent)
  }

  const handleSearch = (value: any) => {
    console.log('Selected value:', value)
  }

  return (
    <Card>
      <CardContent>
        <DatePickerWrapper sx={{ '& .react-datepicker-wrapper': { width: 'auto' } }}>
          <form onSubmit={e => e.preventDefault()}>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={12}>
                <Typography sx={{ fontWeight: 500 }}>
                  <StyledLabel>Nom Adhérent</StyledLabel>
                </Typography>
                <SelectAdherent labelText='Nom adherent' onSearch={handleAdherentSelect} />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography sx={{ fontWeight: 500 }}>
                  <StyledLabel>Nom Individu</StyledLabel>
                </Typography>
                <SelectIndividus labelText='Nom individu' onSearch={handleSearch} />
              </Grid>
              <Grid>

              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography sx={{ fontWeight: 500 }}>
                  <StyledLabel>Montant de limite Assurance</StyledLabel>
                </Typography>
                <CustomTextField
                  name={'DMontant de limite Assurance'}
                  placeholder={'Montant de limite Assurance'}
                  value={MontantAssurance}
                  onChange={e => setMontantAssurance(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography sx={{ fontWeight: 500 }}>
                  <StyledLabel>Date de limite Assurance</StyledLabel>
                </Typography>

                <StyledDatePicker
                  selected={date}
                  onChange={(date: Date) => setDate(date)}
                  customInput={<PickersComponent />}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography sx={{ fontWeight: 500 }}>
                  <StyledLabel>Montant de limite financement</StyledLabel>
                </Typography>

                <CustomTextField
                  name={'Montant de limite financement'}
                  placeholder={'Montant de limite financement'}
                  value={MontantFinancement}
                  onChange={e => setMontantFinancement(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography sx={{ fontWeight: 500 }}>
                  <StyledLabel>Date de limite financement</StyledLabel>
                </Typography>
                <StyledDatePicker
                  selected={date}
                  onChange={(date: Date) => setDate(date)}
                  customInput={<PickersComponent />}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Button variant='contained'>Submit</Button>
              </Grid>
            </Grid>
          </form>
        </DatePickerWrapper>
      </CardContent>
    </Card>
  )
}
export default BuyerInfo
