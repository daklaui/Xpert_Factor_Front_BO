// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { DateType } from 'src/types/forms/reactDatepickerTypes'
import DatePicker from 'react-datepicker'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import CustomTextField from 'src/@core/components/mui/text-field'
import SelectAdherent from 'src/shared-components/custom-select/SelectAdherentList'
import CustomInput from '../Flow/PickersCustomInput'
import TabLitiges from './TabLitiges'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import { generateFakeData } from '../Mock/factureMock'
import SelectAcheteur from '../SelectAcheteur/select'

const InsertForm = () => {
  // ** States
  const [selectedValue] = useState('')

  const [date, setDate] = useState<DateType>(new Date())
  const [date1, setDate1] = useState<DateType>(new Date())
  const [TypeLitige] = useState()
  const [MontantLitige] = useState()
  const fakeData = generateFakeData(5)
  const handleSearch = (value: any) => {
    console.log('Selected value:', value)
  }

  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid xs={12} sm={4}>
          <Card>
            <CardHeader />
            <CardContent>
              <form onSubmit={e => e.preventDefault()}>
                <Grid container spacing={5}>
                  <Grid item xs={12}>
                    <strong>Nom Adhérent</strong>
                    <Grid xs={8}>
                      <SelectAdherent labelText='Nom adherent' onSearch={handleSearch} />
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <strong>Nom Acheteur</strong>
                    <Grid xs={8}>
                      <SelectAcheteur labelText='Nom Acheteur' onSearch={handleSearch} />
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <p>Montant du Litige</p>
                    <Grid xs={12}>
                      <CustomTextField value={selectedValue} disabled>
                        {MontantLitige}
                      </CustomTextField>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <p>Type du Litige</p>
                    <FormControl>
                      <Select placeholder='Achat' value={TypeLitige}>
                        <MenuItem value='Achat'>Achat</MenuItem>
                        <MenuItem value='Sond'>Sond.</MenuItem>
                        <MenuItem value='P.Dir'> P.Dir</MenuItem>
                        <MenuItem value='Autre'>Autre</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <p>Date Litige</p>
                    <DatePickerWrapper>
                      <DatePicker
                        selected={date}
                        onChange={(date: Date) => setDate(date)}
                        customInput={<CustomInput />}
                      />
                    </DatePickerWrapper>
                  </Grid>
                  <Grid item xs={12}>
                    <p>Date Echance Litige</p>
                    <DatePickerWrapper>
                      <DatePicker
                        selected={date1}
                        onChange={(date1: Date) => setDate1(date1)}
                        customInput={<CustomInput />}
                      />
                    </DatePickerWrapper>
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
                        Valider Litige
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={8} xs={12}>
          <Card>
            <CardContent>
              <TabLitiges TableData={fakeData} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default InsertForm
