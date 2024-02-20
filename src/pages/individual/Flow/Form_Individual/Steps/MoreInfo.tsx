import { FormControl, Grid, Icon, IconButton, InputAdornment, OutlinedInput } from '@mui/material'
import Select from 'react-select'
import { ChangeEvent, Fragment, useEffect, useState } from 'react'
import CustomTextField from 'src/@core/components/mui/text-field'
import { CustomSelectProps, SelectInerface, State } from '../interface/FormIndividual.interface'
import { getLangue, getNationalite, getVille } from '../mock'

const MoreInfo = ({ onSearch }: CustomSelectProps) => {
  const [optionsLangue, setOptionsLangue] = useState<SelectInerface[]>([])
  const [statusValueLangue, setStatusValueLangue] = useState('')

  const [optionsNationalite, setOptionsNationalite] = useState<SelectInerface[]>([])
  const [statusValueNationalite, setStatusValueNationalite] = useState('')

  const [optionsVille, setOptionsVille] = useState<SelectInerface[]>([])
  const [statusValueVille, setStatusValueVille] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseLangue = await getLangue()
        setOptionsLangue(responseLangue.optionsLangue)

        const responseNationalite = await getNationalite()
        setOptionsNationalite(responseNationalite.optionsNationalite)

        const responseVille = await getVille()
        setOptionsVille(responseVille.optionsVille)
      } catch (error) {
        console.error('Erreur lors de la récupération des options :', error)
      }
    }
    fetchData()
  }, [])
  const initialCompanyState = {
    Adresse: '',
    Télephone: '',
    Ville: '',
    Fax: '',
    Email: '',
    Login: '',
    Nationalite: '',
    Langue: ''
  }

  const [state, setState] = useState<State>({
    password: '',
    showPassword: false
  })

  const handlePasswordChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    const value = prop === 'password' ? event.target.value : !state.showPassword
    setState({ ...state, [prop]: value })
  }

  const [companyData, setCompanyData] = useState(initialCompanyState)

  function handleChange(field: string, value: string): void {
    const updatedData = { ...companyData, [field]: value }
    setCompanyData(updatedData)
  }

  return (
    <>
      <Fragment>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            label={'Adresse '}
            name={'Adresse'}
            placeholder={'Tapez adresse'}
            value={companyData.Adresse}
            onChange={e => handleChange('Adresse', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Ville</p>
          <Select
            placeholder={'---Sélectionnez une ville---'}
            defaultValue={statusValueVille}
            onChange={(value: any) => {
              onSearch ? onSearch(value) : setStatusValueVille(value)
            }}
            options={optionsVille}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <CustomTextField
            label={'Télèphone '}
            name={'Télephone'}
            placeholder={'Tapez numéro'}
            value={companyData.Télephone}
            onChange={e => handleChange('Télephone', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            label={'Fax '}
            name={'Fax'}
            placeholder={'Tapez fax'}
            value={companyData.Fax}
            onChange={e => handleChange('Fax', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            label={'Email '}
            name={'Email'}
            placeholder={'Tapez email'}
            value={companyData.Email}
            onChange={e => handleChange('Email', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            label={'Login '}
            name={'Login'}
            placeholder={'Tapez login'}
            value={companyData.Login}
            onChange={e => handleChange('Login', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Nationalité</p>
          <Select
            placeholder={'---Sélectionnez une nationalité---'}
            defaultValue={statusValueNationalite}
            onChange={(value: any) => {
              onSearch ? onSearch(value) : setStatusValueNationalite(value)
            }}
            options={optionsNationalite}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Langue</p>
          <Select
            placeholder={'---Sélectionnez langue---'}
            defaultValue={statusValueLangue}
            onChange={(value: any) => {
              onSearch ? onSearch(value) : setStatusValueLangue(value)
            }}
            options={optionsLangue}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant='outlined'>
            <CustomTextField
              label={'Password '}
              name={'Password'}
              value={state.password}
              type={state.showPassword ? 'text' : 'password'}
              placeholder={'Tapez password'}
              onChange={handlePasswordChange('password')}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    edge='end'
                    onClick={handlePasswordChange('showPassword')}
                    onMouseDown={e => e.preventDefault()}
                  >
                    <Icon icon={state.showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </Fragment>
    </>
  )
}

export default MoreInfo
