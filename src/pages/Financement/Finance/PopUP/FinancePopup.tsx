// ** React Imports
import { ChangeEvent, FormEvent, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import DialogContent from '@mui/material/DialogContent'

import { Grid, FormControl, Select, MenuItem, Dialog, DialogTitle } from '@mui/material'
import { DateType } from 'src/types/forms/reactDatepickerTypes'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import DatePicker from 'react-datepicker'
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomInput from './PickersCustomInput'
import CustomRadioBasic from 'src/@core/components/custom-radio/basic'
import { CustomRadioBasicData } from 'src/@core/components/custom-radio/types'

const data: CustomRadioBasicData[] = [
  {
    value: 'overnight',
    isSelected: false,
    title: 'Financement'
  },

  {
    value: 'overnight1',
    isSelected: false,
    title: 'Liberation FDG',
    content: <Box sx={{ mt: 0, height: '100%', display: 'flex', flexDirection: 'column' }}></Box>
  }
]

interface FinancePopup {
  value: string
  handleFilter: (val: string) => void
}

const FinancePopup = () => {
  // ** State
  const [date, setDate] = useState<DateType>(new Date())
  const [TypeFinancement] = useState()
  const [selectedBasicRadio, setSelectedBasicRadio] = useState<string>()

  //**

  const handleBasicRadioChange = (prop: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof prop === 'string') {
      setSelectedBasicRadio(prop)
    } else {
      setSelectedBasicRadio((prop.target as HTMLInputElement).value)
    }
  }

  //

  const [open, setOpen] = useState<boolean>(false)

  const handleDialogToggle = () => setOpen(!open)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    setOpen(false)
    e.preventDefault()
  }

  return (
    <>
      <Box
        sx={{ p: 3, pb: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Button variant='contained' onClick={handleDialogToggle}>
          Financement
        </Button>
      </Box>
      <Dialog fullWidth maxWidth='sm' onClose={handleDialogToggle} open={open} style={{ width: '800px' }}>
        <DialogTitle
          sx={{
            textAlign: 'center',
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(10)} !important`],
            pt: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(10)} !important`]
          }}
        ></DialogTitle>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={2} style={{ marginLeft: '20px ', width: '500px' }}>
                {data.map((item, index) => (
                  <CustomRadioBasic
                    key={index}
                    data={data[index]}
                    name='custom-radios-address'
                    selected={selectedBasicRadio}
                    gridProps={{ sm: 6, xs: 12 }}
                    handleChange={handleBasicRadioChange}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ marginLeft: '20px ', marginRight: '20px' }}>
            <p>Financement</p>
            <CustomTextField fullWidth placeholder={''} name={'Financement'} />
          </Grid>
          <Grid item xs={12} style={{ marginLeft: '20px ', marginRight: '20px' }}>
            <p>Numero de l'instrument de financement</p>
            <CustomTextField placeholder={''} fullWidth />
          </Grid>
          <Grid container spacing={2} alignItems='center'>
            <Grid item xs={4} style={{ marginLeft: '20px ' }}>
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
            <Grid item xs={6} style={{ marginLeft: '20px ' }}>
              <p>Date de l'instrument de financement </p>
              <DatePickerWrapper>
                <DatePicker selected={date} onChange={(date: Date) => setDate(date)} customInput={<CustomInput />} />
              </DatePickerWrapper>
            </Grid>
          </Grid>

          <DialogContent
            sx={{
              px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(10)} !important`],
              pb: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(10)} !important`]
            }}
          >
            <Box
              component='form'
              onSubmit={e => onSubmit(e)}
              sx={{
                mt: 4,
                mx: 'auto',
                width: '100%',
                maxWidth: 360,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
              }}
            >
              <Box className='demo-space-x' sx={{ '& > :last-child': { mr: '0 !important' } }}>
                <Button size='large' type='submit' variant='contained'>
                  Valider
                </Button>
                <Button type='reset' size='large' variant='outlined' color='secondary' onClick={handleDialogToggle}>
                  Discard
                </Button>
              </Box>
            </Box>
          </DialogContent>
        </form>
      </Dialog>
    </>
  )
}

export default FinancePopup
