// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Stepper from '@mui/material/Stepper'
import { styled } from '@mui/material/styles'
import StepLabel from '@mui/material/StepLabel' 
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MuiStep, { StepProps } from '@mui/material/Step'

// ** Third Party Imports
import toast from 'react-hot-toast'
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

//** Types
import { DateType } from 'src/types/forms/reactDatepickerTypes'

// ** Custom Components Imports
import StepperCustomDot from './StepperCustomDot'
import CustomAvatar from 'src/@core/components/mui/avatar'
import CustomInput from './PickersCustomInput'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

// ** Styled Component
import StepperWrapper from 'src/@core/styles/mui/stepper'
import SelectAdherent from 'src/shared-components/custom-select/SelectAdherentList'
import Select from 'react-select'
import SelectIndividu from 'src/shared-components/custom-select/SelectIndividuals'
import CustomTextField from 'src/SharedComponents/StyledTextField/StyledTextField '

interface State {
  password: string
  password2: string
  showPassword: boolean
  showPassword2: boolean
}

const steps = [
  {
    icon: 'tabler:home',
    title: 'Info Génerales',
    subtitle: 'Remplir les cases soigneusement '
  },
  {
    icon: 'tabler:user',
    title: 'AUTRES COMM ET FRAIS',
    subtitle: 'Information supplémentaires'
  },
  {
    icon: 'tabler:link',
    title: 'Social Links',
    subtitle: 'Add Social Links'
  }
]

const Step = styled(MuiStep)<StepProps>(({ theme }) => ({
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  '&:first-of-type': {
    paddingLeft: 0
  },
  '&:last-of-type': {
    paddingRight: 0
  },
  '& .MuiStepLabel-iconContainer': {
    display: 'none'
  },
  '& .step-subtitle': {
    color: `${theme.palette.text.disabled} !important`
  },
  '& + svg': {
    color: theme.palette.text.disabled
  },
  '&.Mui-completed .step-title': {
    color: theme.palette.text.disabled
  },
  '&.Mui-completed + svg': {
    color: theme.palette.primary.main
  }
}))

const GeneralInfo = ({ popperPlacement }: { popperPlacement: ReactDatePickerProps['popperPlacement'] }) => {
  // ** States
  const [date, setDate] = useState<DateType>(new Date())
  const [google, setGoogle] = useState<string>('')
  const [twitter, setTwitter] = useState<string>('')
  const [, setContract] = useState<string>('')
  const [facebook, setFacebook] = useState<string>('')
  const [linkedIn, setLinkedIn] = useState<string>('')
  const [activeStep, setActiveStep] = useState<number>(0)
  const [isClearable] = useState(true)
  const [state, setState] = useState<State>({
    password: '',
    password2: '',
    showPassword: false,
    showPassword2: false
  })

  // Handle Stepper
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
    if (activeStep === steps.length - 1) {
      toast.success('Form Submitted')
    }
  }
  const handleReset = () => {
    setGoogle('')

    setTwitter('')
    setContract('')
    setLinkedIn('')
    setState({ ...state, password: '', password2: '' })
  }

  const handleSearch = (value: any) => {
    // Handle the selected value as needed
    console.log('Selected value:', value)
  }

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

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Fragment>
            <Grid item sm={3}>
              <CustomTextField fullWidth placeholder={'anis'} label='anis' name='anis' correctValue='anis' />
            </Grid>
            <Grid item sm={3}>
              <StyledLabel>Type contrat </StyledLabel>
              <Select className='basic-single' classNamePrefix='select' isClearable={isClearable} name='color' />
            </Grid>
            <Grid item sm={3}>
              <CustomTextField
                fullWidth
                placeholder={'Tapez le chiffres d affaires '}
                label='Chiffres d affaires'
                name='ChiffreDaffaire'
                correctValue=''
              />
            </Grid>
            <Grid item sm={3}>
              <CustomTextField
                fullWidth
                placeholder={'Factures transmises avec '}
                label='Factures transmises avec'
                name='Factures transmises avec'
                correctValue=''
              />
            </Grid>
            <Grid item sm={3}>
              <StyledLabel> Status Contract </StyledLabel>
              <Select className='basic-single' classNamePrefix='select' isClearable={isClearable} name='color' />
            </Grid>
            <Grid item sm={3}>
              <StyledLabel>Devise</StyledLabel>
              <SelectAdherent onSearch={handleSearch} labelText='Select Adherent' />
            </Grid>
            <Grid item sm={3}>
              <CustomTextField
                fullWidth
                placeholder={'Tapez le Dont Export '}
                label='Dont Export'
                name='Dont Export'
                correctValue=''
              />
            </Grid>

            <Grid item sm={3}>
              <CustomTextField
                fullWidth
                placeholder={'Tapez le Nbr d acheteur prévus '}
                label='Nbr d acheteur prévus'
                name="Nbr d 'acheteur prévus"
                correctValue=''
              />
            </Grid>

            <Grid item sm={3}>
              <StyledLabel> Nom Adhérent </StyledLabel>
              <SelectIndividu onSearch={handleSearch} labelText='Select Adherent' />
            </Grid>

            <Grid item sm={3}>
              <StyledLabel> Date de résiliation </StyledLabel>
              <StyledDatePicker
                selected={date}
                id='basic-input'
                popperPlacement={popperPlacement}
                onChange={(date: Date) => setDate(date)}
                customInput={<CustomInput label='' />}
              />
            </Grid>
            <Grid item sm={3}>
              <CustomTextField
                fullWidth
                placeholder={'Tapez le Dont dom '}
                label='Dont dom'
                name='Dont dom'
                correctValue=''
              />
            </Grid>
            <Grid item sm={3}>
              <CustomTextField
                fullWidth
                placeholder={'Dont dom '}
                label='Chiffres d affaires'
                name='Dont dom'
                correctValue=''
              />
            </Grid>
            <Grid item sm={3}>
              <StyledLabel> Date Signature </StyledLabel>
              <StyledDatePicker
                selected={date}
                id='basic-input'
                popperPlacement={popperPlacement}
                onChange={(date: Date) => setDate(date)}
                customInput={<CustomInput label='' />}
              />
            </Grid>

            <Grid item sm={3}>
              <StyledLabel>Date de prochaine révision</StyledLabel>
              <StyledDatePicker
                selected={date}
                id='basic-input'
                popperPlacement={popperPlacement}
                onChange={(date: Date) => setDate(date)}
                customInput={<CustomInput label='' />}
              />
            </Grid>
            <Grid item sm={3}>
              <CustomTextField
                fullWidth
                placeholder={'Limite de financement '}
                label='Limite de financement'
                name='Limite de financement'
                correctValue=''
              />
            </Grid>
            <Grid item sm={3}>
              <CustomTextField
                fullWidth
                placeholder={"Nbr d'avoirs Prévus"}
                label="Nbr d'avoirs Prévus"
                name="Nbr d'avoirs Prévus"
                correctValue=''
              />
            </Grid>

            <Grid item sm={3}>
              <StyledDatePicker
                selected={date}
                id='basic-input'
                popperPlacement={popperPlacement}
                onChange={(date: Date) => setDate(date)}
                customInput={<CustomInput label='' />}
              />
            </Grid>
            <Grid item sm={3}></Grid>
            <Grid item sm={3}>
              <CustomTextField
                fullWidth
                placeholder={'Délai moyen de réglement (jour) '}
                label='Délai moyen de réglement (jour)'
                name='Délai moyen de réglement (jour)'
                correctValue=''
              />
            </Grid>
            <Grid item sm={3}>
              <CustomTextField
                fullWidth
                placeholder={' Délai Max de règlement '}
                label=' Délai Max de règlement'
                name=' Délai Max de règlement'
                correctValue=''
              />
            </Grid>
            <Grid item sm={3}></Grid>
            <Grid item sm={3}></Grid>
            <Grid item sm={3}>
              <CustomTextField
                fullWidth
                placeholder={' Délai Max de règlement '}
                label=' Délai Max de règlement'
                name=' Délai Max de règlement'
                correctValue=''
              />
            </Grid>
            <Grid item sm={3}>
              <StyledLabel> Nbr de remise Prévues </StyledLabel>
              <CustomTextField
                fullWidth
                placeholder={'Nbr de remise Prévues '}
                label='Nbr de remise Prévues'
                name='Nbr de remise Prévues'
                correctValue=''
              />
            </Grid>
          </Fragment>
        )
      case 1:
        return (
          <Fragment key={step}>
            <Grid item xs={12} sm={6}>
              <Select className='basic-single' classNamePrefix='select' isClearable={isClearable} name='color' />
            </Grid>
            <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12} sm={6}></Grid>
          </Fragment>
        )
      case 2:
        return (
          <Fragment key={step}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Twitter'
                value={twitter}
                onChange={e => setTwitter(e.target.value)}
                placeholder='https://twitter.com/carterLeonard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Facebook'
                value={facebook}
                onChange={e => setFacebook(e.target.value)}
                placeholder='https://facebook.com/carterLeonard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Google+'
                value={google}
                onChange={e => setGoogle(e.target.value)}
                placeholder='https://plus.google.com/carterLeonard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='LinkedIn'
                value={linkedIn}
                onChange={e => setLinkedIn(e.target.value)}
                placeholder='https://linkedin.com/carterLeonard'
              />
            </Grid>
          </Fragment>
        )
      default:
        return 'Unknown Step'
    }
  }

  const renderContent = () => {
    if (activeStep === steps.length) {
      return (
        <>
          <Typography>All steps are completed!</Typography>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
            <Button size='large' variant='contained' onClick={handleReset}>
              Reset
            </Button>
          </Box>
        </>
      )
    } else {
      return (
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
                {steps[activeStep].title}
              </Typography>
              <Typography variant='caption' component='p'>
                {steps[activeStep].subtitle}
              </Typography>
            </Grid>
            {getStepContent(activeStep)}
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                size='large'
                variant='outlined'
                color='secondary'
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
              <Button size='large' variant='contained' onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </Grid>
          </Grid>
        </form>
      )
    }
  }

  return (
    <Card>
      <CardContent>
        <StepperWrapper>
          <Stepper activeStep={activeStep} connector={<Icon icon='tabler:chevron-right' />}>
            {steps.map((step, index) => {
              const RenderAvatar = activeStep >= index ? CustomAvatar : Avatar

              return (
                <Step key={index}>
                  <StepLabel StepIconComponent={StepperCustomDot}>
                    <div className='step-label'>
                      <RenderAvatar
                        variant='rounded'
                        {...(activeStep >= index && { skin: 'light' })}
                        {...(activeStep === index && { skin: 'filled' })}
                        {...(activeStep >= index && { color: 'primary' })}
                        sx={{
                          ...(activeStep === index && { boxShadow: theme => theme.shadows[3] }),
                          ...(activeStep > index && { color: theme => hexToRGBA(theme.palette.primary.main, 0.4) })
                        }}
                      >
                        <Icon icon={step.icon} />
                      </RenderAvatar>
                      <div>
                        <Typography className='step-title'>{step.title}</Typography>
                        <Typography className='step-subtitle'>{step.subtitle}</Typography>
                      </div>
                    </div>
                  </StepLabel>
                </Step>
              )
            })}
          </Stepper>
        </StepperWrapper>
      </CardContent>
      <Divider sx={{ m: '0 !important' }} />
      <CardContent>{renderContent()}</CardContent>
    </Card>
  )
}

export default GeneralInfo
