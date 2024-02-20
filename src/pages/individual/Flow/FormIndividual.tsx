/* eslint-disable @typescript-eslint/no-unused-vars */
// ** React Imports
import { ChangeEvent, Fragment, useState } from 'react'


// ** MUI Imports
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MuiStep, { StepProps } from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { Checkbox, FormControl, Grid, MenuItem } from '@mui/material'

// ** Third Party Imports
import toast from 'react-hot-toast'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
import StepperCustomDot from 'C:/Users/HpPavilion/Desktop/xpert/Xpert_Factor_Front_BO/src/pages/individual/Flow/Form_Individual/StepperCustomDot';

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

// ** Styled Component
import { FormControlLabel, IconButton, InputAdornment, Radio, RadioGroup } from '@mui/material'
import StepperWrapper from 'src/@core/styles/mui/stepper'

import DatePicker from 'react-datepicker'

// ** Custom Component Imports
import CustomInput from 'C:/Users/HpPavilion/Desktop/xpert/Xpert_Factor_Front_BO/src/pages/individual/Flow/Form_Individual/PickersCustomInput'

// ** Types
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import { DateType } from 'src/types/forms/reactDatepickerTypes'

interface State {
  password: string
  password2: string
  showPassword: boolean
  showPassword2: boolean
}
const steps = [
  { icon: 'tabler:building-community', title: 'Société' },
  { icon: 'tabler:percentage', title: 'TVA ' },
  { icon: 'tabler:building-bank', title: 'Banque ' },
  { icon: 'tabler:user', title: "Plus d'information" },
  { icon: 'tabler:user-plus', title: "Ajouter contact" },
];
const Step = styled(MuiStep)<StepProps>(({ theme }) => ({
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(5),
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
  const [RIB, setRIB] = useState<string>('')
  const [date, setDate] = useState<DateType>(new Date())
  const [juridique, setJuridique] = useState<string>('')
  const [dénomination, setDenomination] = useState<string>('')
  const [nom_com, setNom_com] = useState<string>('')
  const [code_TVA, setCdTVA] = useState<string>('')
  const [language, setLanguage] = useState<string[]>([])
  const [nationalite, setNationalite] = useState<string>('')
  const [language, setLanguage] = useState<string[]>([])
  const [nationalite, setNationalite] = useState<string>('')
  const [reg_com, setRegistre_com] = useState<string>('')
  const [lieu, setLieu] = useState<string>('')
  const [grp_soc, setGroupeSocietes] = useState<string>('')
  const [banque, setBanque] = useState<string>('')
  const [agence, setAgence] = useState<string>('')
  const [activite, setActivite] = useState<string>('')
  const [, setTVA] = useState<string>('')
  const [Email, setEmail] = useState<string>('')
  const [Email_Plus, setEmail_Plus] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [Adresse, setAdresse] = useState<string>('')
  const [Télephone, setTélephone] = useState<string>('')
  const [Télephone_Plus, setTélephone_Plus] = useState<string>('')
  const [Ville, setVille] = useState<string>('')
  const [Fax, setFax] = useState<string>('')
  const [situation, setSituation] = useState<string>('')
  const [Login, setLogin] = useState<string>('')
  const [activeStep, setActiveStep] = useState<number>(0)
  const [selectDisabled, setSelectDisabled] = useState(false)
  const [exonerationTVA, setExonerationTVA] = useState<string>('')
  const [dateDebutExonerationTVA, setDateDebutExonerationTVA] = useState<DateType>(new Date())
  const [dateFinExonerationTVA, setDateFinExonerationTVA] = useState<DateType>(new Date())
  const [exonerationDisabled, setExonerationDisabled] = useState(false)
  const [selectDisabled, setSelectDisabled] = useState(false)
  const [exonerationTVA, setExonerationTVA] = useState<string>('')
  const [dateDebutExonerationTVA, setDateDebutExonerationTVA] = useState<DateType>(new Date())
  const [dateFinExonerationTVA, setDateFinExonerationTVA] = useState<DateType>(new Date())
  const [exonerationDisabled, setExonerationDisabled] = useState(false)

  const [state, setState] = useState<State>({
    password: '',
    password2: '',
    showPassword: false,
    showPassword2: false
  }) // remove the confirm password

  // Handle Stepper
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)

    if (activeStep === steps.length - 1) {
      toast.success('Formulaire soumis')
    }
  }
    setActiveStep(prevActiveStep => prevActiveStep + 1)

    if (activeStep === steps.length - 1) {
      toast.success('Formulaire soumis')
    }
  }

  const handleReset = () => {
    setRIB('')
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
    setEmail_Plus('')
    setSituation('')
    setNationalite('')
    setLanguage([])
    setLanguage([])
    setAdresse('')
    setVille('')
    setUsername('')
    setBanque('')
    setAgence('')
    setTélephone('')
    setTélephone_Plus('')
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
    setLanguage(event.target.value as string[])
  }

  const handleExonerationTVAChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setExonerationTVA(value)
    setExonerationDisabled(value === 'Non')
  }

    const value = event.target.value
    setExonerationTVA(value)
    setExonerationDisabled(value === 'Non')
  }

  const getStepContent = (step: number) => {
    function handleRadioChange(event: ChangeEvent<HTMLInputElement>, value: string): void {
      if (activeStep === 0) {
        setGroupeSocietes(value)
        setSelectDisabled(value === 'Non')
        setGroupeSocietes(value)
        setSelectDisabled(value === 'Non')
      }
    }


    switch (step) {
      case 0:
        return (
          // chane all the select list with react-select
          <Fragment>
            <Grid item xs={12} sm={6}>
              <p>Forme juridique</p>
            <Grid item xs={12} sm={6}>
              <p>Forme juridique</p>
              <FormControl fullWidth>
                <Select value={juridique} onChange={e => setJuridique(e.target.value)}>
                <Select value={juridique} onChange={e => setJuridique(e.target.value)}>
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
              {/* chane all the TextField with anis input */}
              <p>Dénomination </p>
              <TextField fullWidth value={dénomination} onChange={e => setDenomination(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <p>Nom de commerce </p>
              <TextField fullWidth value={nom_com} onChange={e => setNom_com(e.target.value)} />
              <TextField fullWidth value={nom_com} onChange={e => setNom_com(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Grid item xs={12} sm={6}>
              <p>Register de commerce</p>
              <TextField fullWidth value={reg_com} onChange={e => setRegistre_com(e.target.value)} />
              <TextField fullWidth value={reg_com} onChange={e => setRegistre_com(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <p>Activité</p>
              <FormControl fullWidth>
                <Select value={activite} onChange={e => setActivite(e.target.value)}>
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
            <Grid item xs={12} sm={6}>
            <Grid item xs={12} sm={6}>
              <p>Activité</p>
              <FormControl fullWidth>
                <Select value={activite} onChange={e => setActivite(e.target.value)}>
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
            <Grid item xs={12} sm={6}>
              <p>Lieu</p>
              <TextField fullWidth value={lieu} onChange={e => setLieu(e.target.value)} />
              <TextField fullWidth value={lieu} onChange={e => setLieu(e.target.value)} />
            </Grid>
            <Grid container alignItems='center' item xs={12} sm={6}>
            <Grid container alignItems='center' item xs={12} sm={6}>
              <p>Groupe de sociétés</p>
              <RadioGroup row name='groupe-de-societes' onChange={handleRadioChange} value={grp_soc}>
                <FormControlLabel value='Oui' control={<Radio />} label='Oui' />
                <FormControlLabel value='Non' control={<Radio />} label='Non' />
              </RadioGroup>
            </Grid>
            <Grid item xs={12} sm={6}>
              <p>Groupe de sociétés</p>
              <FormControl fullWidth>
                <Select value={grp_soc} onChange={e => setGroupeSocietes(e.target.value)} disabled={selectDisabled}>
              <FormControl fullWidth>
                <Select value={grp_soc} onChange={e => setGroupeSocietes(e.target.value)} disabled={selectDisabled}>
                  <MenuItem value='Poulina'>Poulina</MenuItem>
                  <MenuItem value='Test'>Test</MenuItem>
                  <MenuItem value='Ajouter groupe'>Ajouter groupe</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <p>Date de création</p>
              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <div>
                  <DatePicker selected={date} onChange={(date: Date) => setDate(date)} customInput={<CustomInput />} />
                </div>
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <div>
                  <DatePicker selected={date} onChange={(date: Date) => setDate(date)} customInput={<CustomInput />} />
                </div>
              </Box>
            </Grid>
          </Fragment>
        )
        )
      case 1:
        return (
          <Fragment key={step}>
            <Grid item xs={12} sm={6}>
              <p>Code TVA </p>
              <TextField value={code_TVA} onChange={e => setCdTVA(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <p>Exonération TVA </p>
              <RadioGroup row onChange={e => handleExonerationTVAChange(e)}>
                <FormControlLabel value='Oui' control={<Radio />} label='Oui' />
                <FormControlLabel value='Non' control={<Radio />} label='Non' />
              </RadioGroup>
            </Grid>
            <Grid item xs={12} sm={6} disabled={exonerationDisabled}>
              <p>Date Début Exonération TVA</p>
              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <div>
                  <DatePicker
                    selected={dateDebutExonerationTVA}
                    onChange={(date: Date) => setDateDebutExonerationTVA(date)}
                    customInput={<CustomInput />}
                    disabled={exonerationDisabled}
                  />
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} disabled={exonerationDisabled}>
              <p>Date Fin Exonération TVA</p>
              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <div>
                  <DatePicker
                    selected={dateFinExonerationTVA}
                    onChange={(date: Date) => setDateFinExonerationTVA(date)}
                    customInput={<CustomInput />}
                    disabled={exonerationDisabled}
                  />
                </div>
              </Box>
            </Grid>
          </Fragment>
        )

          <Fragment key={step}>
            <Grid item xs={12} sm={6}>
              <p>Code TVA </p>
              <TextField value={code_TVA} onChange={e => setCdTVA(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <p>Exonération TVA </p>
              <RadioGroup row onChange={e => handleExonerationTVAChange(e)}>
                <FormControlLabel value='Oui' control={<Radio />} label='Oui' />
                <FormControlLabel value='Non' control={<Radio />} label='Non' />
              </RadioGroup>
            </Grid>
            <Grid item xs={12} sm={6} disabled={exonerationDisabled}>
              <p>Date Début Exonération TVA</p>
              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <div>
                  <DatePicker
                    selected={dateDebutExonerationTVA}
                    onChange={(date: Date) => setDateDebutExonerationTVA(date)}
                    customInput={<CustomInput />}
                    disabled={exonerationDisabled}
                  />
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} disabled={exonerationDisabled}>
              <p>Date Fin Exonération TVA</p>
              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <div>
                  <DatePicker
                    selected={dateFinExonerationTVA}
                    onChange={(date: Date) => setDateFinExonerationTVA(date)}
                    customInput={<CustomInput />}
                    disabled={exonerationDisabled}
                  />
                </div>
              </Box>
            </Grid>
          </Fragment>
        )

      case 2:
        return (
          <Fragment key={step}>
            <Grid item xs={12} sm={6}>
            <Grid item xs={12} sm={6}>
              <p>RIB</p>
              <TextField fullWidth value={RIB} onChange={e => setRIB(e.target.value)} />
              <TextField fullWidth value={RIB} onChange={e => setRIB(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <p>Banque</p>
              <TextField fullWidth value={banque} onChange={e => setBanque(e.target.value)} />
              <TextField fullWidth value={banque} onChange={e => setBanque(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <p>Agence</p>
              <TextField fullWidth value={agence} onChange={e => setAgence(e.target.value)} />
              <TextField fullWidth value={agence} onChange={e => setAgence(e.target.value)} />
            </Grid>
          </Fragment>
        )
      case 3:
        return (
          <Fragment key={step}>
            <Grid item xs={12} sm={6}>
              <p>Adresse</p>
              <TextField fullWidth value={Adresse} onChange={e => setAdresse(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <p>Ville</p>
            <Grid item xs={12} sm={6}>
              <p>Ville</p>
              <FormControl fullWidth>
                <Select value={Ville} onChange={e => setVille(e.target.value)}>
                <Select value={Ville} onChange={e => setVille(e.target.value)}>
                  <MenuItem value='PONT DE BIZERTE | 2061'>PONT DE BIZERTE | 2061</MenuItem>
                  <MenuItem value='CHORFECH | 2057'>CHORFECH | 2057</MenuItem>
                  <MenuItem value='SIDI THABET | 2020'>SIDI THABET | 2020</MenuItem>
                  <MenuItem value='TUNIS CARTHAGE | 2035'>TUNIS CARTHAGE | 2035</MenuItem>
                  <MenuItem value='RAOUED | 2056'>RAOUED | 2056</MenuItem>
                  <MenuItem value='EL MENZAH 6 | 2091'>EL MENZAH 6 | 2091</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Grid item xs={12} sm={6}>
              <p>Télèphone</p>
              <TextField fullWidth value={Télephone} onChange={e => setTélephone(e.target.value)} />
              <TextField fullWidth value={Télephone} onChange={e => setTélephone(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Grid item xs={12} sm={6}>
              <p>Fax</p>
              <TextField fullWidth value={Fax} onChange={e => setFax(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Grid item xs={12} sm={6}>
              <p>Email</p>
              <TextField fullWidth value={Email} onChange={e => setEmail(e.target.value)} />
              <TextField fullWidth value={Email} onChange={e => setEmail(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Grid item xs={12} sm={6}>
              <p>Login</p>
              <TextField fullWidth value={Login} onChange={e => setLogin(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <p>Nationalité</p>
              <FormControl fullWidth>
                <Select value={nationalite} onChange={e => setNationalite(e.target.value)}>
                  <MenuItem value='Tunisienne'>Tunisienne</MenuItem>
                  <MenuItem value='Française'>Française</MenuItem>
                  <MenuItem value='canadienne'>canadienne</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <p>Langue</p>
              <FormControl fullWidth>
                <Select
                  multiple
                  value={language}
                  onChange={handleSelectChange}
                  id='stepper-custom-horizontal-personal-multiple-select'
                  labelId='stepper-custom-horizontal-personal-multiple-select-label'
                >
                  <MenuItem value='English'>English</MenuItem>
                  <MenuItem value='French'>French</MenuItem>
                  <MenuItem value='Spanish'>Spanish</MenuItem>
                  <MenuItem value='Portuguese'>Portuguese</MenuItem>
                  <MenuItem value='Italian'>Italian</MenuItem>
                  <MenuItem value='German'>German</MenuItem>
                  <MenuItem value='Arabic'>Arabic</MenuItem>
                </Select>
                <Select
                  multiple
                  value={language}
                  onChange={handleSelectChange}
                  id='stepper-custom-horizontal-personal-multiple-select'
                  labelId='stepper-custom-horizontal-personal-multiple-select-label'
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
              <p>Password</p>
              <FormControl fullWidth>
                <OutlinedInput
                  value={state.password}
                  onChange={handlePasswordChange('password')}
                  type={state.showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton edge='end' onClick={handleClickShowPassword} onMouseDown={e => e.preventDefault()}>
                      <IconButton edge='end' onClick={handleClickShowPassword} onMouseDown={e => e.preventDefault()}>
                        <Icon icon={state.showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Grid item xs={12} sm={6}>
              <p>Confirm Password</p>
              <FormControl fullWidth>
                <OutlinedInput
                  value={state.password2}
                  onChange={handleConfirmChange('password2')}
                  type={state.showPassword2 ? 'text' : 'password'}
                  type={state.showPassword2 ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onMouseDown={e => e.preventDefault()}
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
      case 4:
        return (
          <Fragment key={step}>
            <Grid item xs={12} sm={6}>
      case 4:
        return (
          <Fragment key={step}>
            <Grid item xs={12} sm={6}>
              <p>Nom et prénom</p>
              <TextField fullWidth value={username} onChange={e => setUsername(e.target.value)} />
              <TextField fullWidth value={username} onChange={e => setUsername(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Grid item xs={12} sm={6}>
              <p>Position</p>
              <FormControl fullWidth>
                <Select value={Ville} onChange={e => setVille(e.target.value)}>
                  <MenuItem value='PONT DE BIZERTE | 2061'>PONT DE BIZERTE | 2061</MenuItem>
                  <MenuItem value='CHORFECH | 2057'>CHORFECH | 2057</MenuItem>
                  <MenuItem value='SIDI THABET | 2020'>SIDI THABET | 2020</MenuItem>
                  <MenuItem value='TUNIS CARTHAGE | 2035'>TUNIS CARTHAGE | 2035</MenuItem>
                  <MenuItem value='RAOUED | 2056'>RAOUED | 2056</MenuItem>
                  <MenuItem value='EL MENZAH 6 | 2091'>EL MENZAH 6 | 2091</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Select value={Ville} onChange={e => setVille(e.target.value)}>
                  <MenuItem value='PONT DE BIZERTE | 2061'>PONT DE BIZERTE | 2061</MenuItem>
                  <MenuItem value='CHORFECH | 2057'>CHORFECH | 2057</MenuItem>
                  <MenuItem value='SIDI THABET | 2020'>SIDI THABET | 2020</MenuItem>
                  <MenuItem value='TUNIS CARTHAGE | 2035'>TUNIS CARTHAGE | 2035</MenuItem>
                  <MenuItem value='RAOUED | 2056'>RAOUED | 2056</MenuItem>
                  <MenuItem value='EL MENZAH 6 | 2091'>EL MENZAH 6 | 2091</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <p>Télèphone</p>
              <TextField fullWidth value={Télephone_Plus} onChange={e => setTélephone_Plus(e.target.value)} />
              <TextField fullWidth value={Télephone_Plus} onChange={e => setTélephone_Plus(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <p>Fax</p>
              <TextField fullWidth value={Fax} onChange={e => setFax(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Grid item xs={12} sm={6}>
              <p>Fax</p>
              <TextField fullWidth value={Fax} onChange={e => setFax(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <p>Email</p>
              <TextField fullWidth value={Email_Plus} onChange={e => setEmail_Plus(e.target.value)} />
              <TextField fullWidth value={Email_Plus} onChange={e => setEmail_Plus(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <p>Situation</p>
              <Checkbox value={situation} onChange={e => setSituation(e.target.value)} />
            </Grid>
          </Fragment>
        )
              <p>Situation</p>
              <Checkbox value={situation} onChange={e => setSituation(e.target.value)} />
            </Grid>
          </Fragment>
        )
      default:
        return 'Étape inconnue'
    }
  }
  const renderContent = () => {
    if (activeStep === steps.length) {
      return (
        <>
          <Typography>All steps are completed!</Typography>
          <Box sx={{ mt: 5, display: 'flex', justifyContent: 'flex-end' }}>
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
                Retour
              </Button>
              <Button size='large' variant='contained' onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Envoyer' : 'Suivant'}
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
