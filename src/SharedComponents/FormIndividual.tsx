/* eslint-disable @typescript-eslint/no-unused-vars */
// ** React Imports
import { ChangeEvent, Fragment, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Stepper from '@mui/material/Stepper'
import { styled } from '@mui/material/styles'
import StepLabel from '@mui/material/StepLabel'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import OutlinedInput from '@mui/material/OutlinedInput'
import MuiStep, { StepProps } from '@mui/material/Step'
import Select, { SelectChangeEvent } from '@mui/material/Select'

import { Grid, FormControl, InputLabel, MenuItem } from '@mui/material'

// ** Third Party Imports
import toast from 'react-hot-toast'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import StepperCustomDot from './StepperCustomDot'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

// ** Styled Component
import StepperWrapper from 'src/@core/styles/mui/stepper'
import { FormControlLabel, IconButton, InputAdornment, Radio, RadioGroup } from '@mui/material'

import DatePicker from 'react-datepicker'

// ** Custom Component Imports
import CustomInput from './PickersCustomInput'

// ** Types
import { DateType } from 'src/types/forms/reactDatepickerTypes'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

interface State {
  password: string
  password2: string
  showPassword: boolean
  showPassword2: boolean
}

const steps = [
  {
    icon: 'tabler:home',
    title: 'les détails de société',
    subtitle: 'Entrer les détails'
  },
  {
    icon: 'tabler:activity',
    title: 'Société ',
    subtitle: 'Information société'
  },
  {
    icon: 'tabler:percentage',
    title: 'TVA ',
    subtitle: 'Information sur TVA'
  },
  {
    icon: 'tabler:building-bank',
    title: 'Banque ',
    subtitle: 'Compte bancaire'
  },
  {
    icon: 'tabler:user',
    title: "Plus d'information",
    subtitle: 'Informations Personnel'
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

const FormIndividual = () => {
  // ** States
  const [date, setDate] = useState<DateType>(new Date())
  const [juridique, setJuridique] = useState<string>('')
  const [dénomination, setDenomination] = useState<string>('')
  const [nom_com, setNom_com] = useState<string>('')
  const [code_TVA, setCdTVA] = useState<string>('')
  const [language, setLanguage] = useState<string[]>([]);
  const [nationalite, setNationalite] = useState<string>('');
  const [reg_com, setRegistre_com] = useState<string>('')
  const [lieu, setLieu] = useState<string>('')
  const [grp_soc, setGroupeSocietes] = useState<string>('')
  const [activite, setActivite] = useState<string>('')
  const [, setTVA] = useState<string>('')
  const [Email, setEmail] = useState<string>('')
  const [Adresse, setAdresse] = useState<string>('')
  const [Télephone, setTélephone] = useState<string>('')
  const [Ville, setVille] = useState<string>('')
  const [Fax, setFax] = useState<string>('')
  const [Login, setLogin] = useState<string>('')
  const [activeStep, setActiveStep] = useState<number>(0)
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
    setJuridique('')
    setTVA('')
    setCdTVA('')
    setDenomination('')
    setNom_com('')
    setRegistre_com('')
    setLieu('')
    setGroupeSocietes('')
    setActivite('')
    setEmail('')
    setNationalite('')
    setLanguage([]);
    setAdresse('')
    setVille('')
    setTélephone('')
    setFax('')
    setLogin('')
    setActiveStep(0)
    setState({ ...state, password: '', password2: '' })
  }

  // Handle Password
  const handlePasswordChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [prop]: event.target.value })
  }
  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword })
  }

  // Handle Confirm Password
  const handleConfirmChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [prop]: event.target.value })
  }
  const handleClickShowConfirmPassword = () => {
    setState({ ...state, showPassword2: !state.showPassword2 })
  }

  // Handle Language
  const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
    setLanguage(event.target.value as string[])
  }

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Fragment>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='' style={{ marginTop: '0%' }}>
                  Forme juridique
                </InputLabel>
                <Select label='Forme juridique' value={juridique} onChange={e => setJuridique(e.target.value)}>
                  <MenuItem value='Société à responsabilité limitée'>Société à responsabilité limitée</MenuItem>
                  <MenuItem value='Société anonyme'>Société anonyme</MenuItem>
                  <MenuItem value='Société unipersonnelle à responsabilité limitée'>
                    Société unipersonnelle à responsabilité limitée
                  </MenuItem>
                  <MenuItem value='Société en nom collectif'>Société en nom collectif</MenuItem>
                  <MenuItem value='Société en commandite simple'>Société en commandite simple</MenuItem>
                  <MenuItem value='Société en participation'>Société en participation</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Dénomination'
                value={dénomination}
                onChange={e => setDenomination(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Nom de commerce' value={nom_com} onChange={e => setNom_com(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Register de commerce'
                value={reg_com}
                onChange={e => setRegistre_com(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Lieu' value={lieu} onChange={e => setLieu(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Datde de création' value={lieu} onChange={e => setLieu(e.target.value)} />
            </Grid>
          </Fragment>
        )
      case 1:
        function handleRadioChange(_event: ChangeEvent<HTMLInputElement>, value: string): void {
          throw new Error('Function not implemented.')
        }

        return (
          <Fragment key={step}>
            <Grid container alignItems='center' item xs={12} sm={6}>
              <p>Groupe de sociétés</p>
              <RadioGroup row name='groupe-de-societes' onChange={handleRadioChange} value={grp_soc}>
                <FormControlLabel value='Oui' control={<Radio />} label='Oui' />
                <FormControlLabel value='Non' control={<Radio />} label='Non' />
              </RadioGroup>

              <p> </p>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id=''>Groupe de sociétés</InputLabel>
                  <Select
                    label='Groupe de sociétés'
                    value={grp_soc}
                    onChange={e => setGroupeSocietes(e.target.value)}
                    disabled={grp_soc === 'Non'}
                  >
                    <MenuItem value='Poulina'>Poulina</MenuItem>
                    <MenuItem value='Test'>Test</MenuItem>
                    <MenuItem value='Ajouter groupe'>Ajouter groupe</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id=''>Activité</InputLabel>
                <Select label='Activité' value={activite} onChange={e => setActivite(e.target.value)}>
                  <MenuItem value='ACTIVITE INCONNUE'>ACTIVITE INCONNUE</MenuItem>
                  <MenuItem value='Culture de céréales'>Culture de céréales</MenuItem>
                  <MenuItem value='Culture de fourrages'>Culture de fourrages</MenuItem>
                  <MenuItem value='Culture de légumineuses et cultures industrielles'>
                    Culture de légumineuses et cultures industrielles
                  </MenuItem>
                  <MenuItem value="Culture d'agrumes et vergers ">Culture d'agrumes et vergers</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Fragment>
        )
      case 2:
        return (
          <Fragment key={step}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Code TVA' value={code_TVA} onChange={e => setCdTVA(e.target.value)} />
            </Grid>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
              <div>
                <DatePicker
                  selected={date}
                  id='basic-input'
                  onChange={(date: Date) => setDate(date)}
                  placeholderText='Click to select a date'
                  customInput={<CustomInput label='Basic' />}
                />
              </div>
            </Box>
            <Grid container alignItems='center' item xs={12} sm={6}>
              <p>Exonération TVA :</p>
              <RadioGroup row name='exonération-TVA' onChange={e => setTVA(e.target.value)}>
                <FormControlLabel value='Oui' control={<Radio />} label='Oui' />
                <FormControlLabel value='Non' control={<Radio />} label='Non' />
              </RadioGroup>
            </Grid>
          </Fragment>
        )
      case 3:
        return (
          <Fragment key={step}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='RIB'
                value={Adresse}
                onChange={e => setAdresse(e.target.value)}
                placeholder='RIB'
              />
            </Grid>
          </Fragment>
        )
      case 4:
        return (
          <Fragment key={step}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Adresse' value={Adresse} onChange={e => setAdresse(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Ville' value={Ville} onChange={e => setVille(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Télephone' value={Télephone} onChange={e => setTélephone(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Fax' value={Fax} onChange={e => setFax(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Email' value={Email} onChange={e => setEmail(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Login' value={Login} onChange={e => setLogin(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id=''>Nationalité</InputLabel>
                <Select label='Nationalité' value={nationalite} onChange={e => setNationalite(e.target.value)}>
                  <MenuItem value='Tunisienne'>Tunisienne</MenuItem>
                  <MenuItem value='Française'>Française</MenuItem>
                  <MenuItem value='canadienne'>canadienne</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='stepper-custom-horizontal-personal-multiple-select-label'>Language</InputLabel>
                <Select
                  multiple
                  value={language}
                  onChange={handleSelectChange}
                  id='stepper-custom-horizontal-personal-multiple-select'
                  labelId='stepper-custom-horizontal-personal-multiple-select-label'
                  input={<OutlinedInput label='Language' id='stepper-custom-horizontal-select-multiple-language' />}
                >
                  <MenuItem value='English'>English</MenuItem>
                  <MenuItem value='French'>French</MenuItem>
                  <MenuItem value='Spanish'>Spanish</MenuItem>
                  <MenuItem value='Portuguese'>Portuguese</MenuItem>
                  <MenuItem value='Italian'>Italian</MenuItem>
                  <MenuItem value='German'>German</MenuItem>
                  <MenuItem value='Arabic'>Arabic</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor='stepper-custom-horizontal-account-password'>Password</InputLabel>
                <OutlinedInput
                  label='Password'
                  value={state.password}
                  id='stepper-custom-horizontal-account-password'
                  onChange={handlePasswordChange('password')}
                  type={state.showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowPassword}
                        onMouseDown={e => e.preventDefault()}
                        aria-label='toggle password visibility'
                      >
                        <Icon icon={state.showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor='stepper-custom-horizontal-account-password-2'>Confirm Password</InputLabel>
                <OutlinedInput
                  value={state.password2}
                  label='Confirm Password'
                  id='stepper-custom-horizontal-account-password-2'
                  onChange={handleConfirmChange('password2')}
                  type={state.showPassword2 ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onMouseDown={e => e.preventDefault()}
                        aria-label='toggle password visibility'
                        onClick={handleClickShowConfirmPassword}
                      >
                        <Icon icon={state.showPassword2 ? 'tabler:eye' : 'tabler:eye-off'} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
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
      <CardContent>
        <DatePickerWrapper sx={{ '& .react-datepicker-wrapper': { width: 'auto' } }}>
          {renderContent()}
        </DatePickerWrapper>
      </CardContent>
    </Card>
  )
}

export default FormIndividual
