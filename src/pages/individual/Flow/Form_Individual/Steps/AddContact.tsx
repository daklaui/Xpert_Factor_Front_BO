import {
  Grid
} from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import Select from 'react-select';
import CustomTextField from 'src/@core/components/mui/text-field';
import { CustomSelectProps, SelectInerface } from '../interface/FormIndividual.interface';
import { getVille } from '../mock';


const AddContact = ({ onSearch }: CustomSelectProps) => {

  const [optionsVille, setOptionsVille] = useState<SelectInerface[]>([])
  const [statusValueVille, setStatusValueVille] = useState('')
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseVille = await getVille()
        setOptionsVille(responseVille.optionsVille)
      } catch (error) {
        console.error('Erreur lors de la récupération des options :', error)
      }
    }
    fetchData()
  }, [])
  const initialCompanyState = {
    Name: '',
    Télephone: '',
    Position: '',
    Fax: '',
    Email: '',
    Login: '',
   
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
            label={'Nom et prénom '}
            name={'Name'}
            placeholder={'Tapez nom et prénom'}
            value={companyData.Name}
            onChange={(e) => handleChange('Name', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Position</p>
          <Select
            placeholder={'---Sélectionnez une positin---'}
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
            onChange={(e) => handleChange('Télephone', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            label={'Fax '}
            name={'Fax'}
            placeholder={'Tapez fax'}
            value={companyData.Fax}
            onChange={(e) => handleChange('Fax', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            label={'Email '}
            name={'Email'}
            placeholder={'Tapez email'}
            value={companyData.Email}
            onChange={(e) => handleChange('Email', e.target.value)}
          />
        </Grid>


      </Fragment>
    </>
  )
}

export default AddContact