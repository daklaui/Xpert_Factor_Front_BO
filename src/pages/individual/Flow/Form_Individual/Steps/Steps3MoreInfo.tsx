import {
  FormControl,
  Grid,
  Icon,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField
} from '@mui/material'
import { useState, Fragment, ChangeEvent } from 'react'
import { getLangue, getNationalite, getVille } from '../mock'
import { State } from '../interface/FormIndividual.interface'

const Step3MoreInfo = () => {
  const initialCompanyState = {
    Adresse: '',
    Telephone: '',
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
          <p>Adresse</p>
          <TextField fullWidth value={companyData.Adresse} onChange={e => handleChange('Adresse', e.target.value)} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Ville</p>
          <Select
            options={getVille}
            value={{ value: companyData.Ville, label: companyData.Ville }}
            onChange={(getVille: { value: string }) => handleChange('Ville', getVille.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <p>Télèphone</p>
          <TextField
            fullWidth
            value={companyData.Telephone}
            onChange={e => handleChange('Telephone', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Fax</p>
          <TextField fullWidth value={companyData.Fax} onChange={e => handleChange('Fax', e.target.value)} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Email</p>
          <TextField fullWidth value={companyData.Email} onChange={e => handleChange('Email', e.target.value)} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Login</p>
          <TextField fullWidth value={companyData.Login} onChange={e => handleChange('Login', e.target.value)} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Nationalité</p>
          <Select
            options={getNationalite}
            value={{ value: companyData.Nationalite, label: companyData.Nationalite }}
            onChange={(selectedOption: { value: string; label: string }) =>
              handleChange('Nationalite', selectedOption.value)
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Langue</p>
          <Select
            options={getLangue}
            value={{ value: companyData.Langue, label: companyData.Langue }}
            onChange={(selectedLangue: { value: string }) => handleChange('Langue', selectedLangue.value)}
          />
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
                  <IconButton edge='end' onClick={handlePasswordChange} onMouseDown={e => e.preventDefault()}>
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

export default Step3MoreInfo
