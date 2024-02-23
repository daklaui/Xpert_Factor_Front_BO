import { Grid } from '@mui/material'
import { Fragment, useEffect, useState } from 'react'
import Select from 'react-select'
import CustomTextField from 'src/@core/components/mui/text-field'
import { CustomSelectProps, SelectInerface } from '../interface/FormIndividual.interface'
import { getVille } from '../mock'

const AddContact = ({ onSearch }: CustomSelectProps) => {
  const [optionsVille, setOptionsVille] = useState<SelectInerface[]>([])
  const [statusValueVille, setStatusValueVille] = useState('')
  const [optionsVille, setOptionsVille] = useState<SelectInerface[]>([])
  const [statusValueVille, setStatusValueVille] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseVille = await getVille()
        setOptionsVille(responseVille.optionsVille)
        const responseVille = await getVille()
        setOptionsVille(responseVille.optionsVille)
      } catch (error) {
        console.error('Erreur lors de la récupération des options :', error)
        console.error('Erreur lors de la récupération des options :', error)
      }
    }
    fetchData()
  }, [])
  const initialCompanyState = {
    Name: 'Anis Allagui',
    Télephone: '123-456-7890',
    Position: 'PONT DE BIZERTE | 2061',
    Fax: '987-654-3210',
    Email: 'john.doe@example.com'
  }

  const [companyData, setCompanyData] = useState(initialCompanyState)

  function handleChange(field: string, value: string): void {
    const updatedData = { ...companyData, [field]: value }
    setCompanyData(updatedData)
  }

  return (
    <>
      <Fragment>
        <Grid sm={1.5}></Grid>
        <Grid item sm={4}>
          <CustomTextField
            fullWidth
            label={'Nom et prénom '}
            name={'Name'}
            placeholder={'Tapez nom et prénom'}
            value={companyData.Name}
            onChange={e => handleChange('Name', e.target.value)}
          />
        </Grid>
        <Grid sm={1}></Grid>
        <Grid item sm={4}>
          position
          <Select
            placeholder={'---Sélectionnez une position---'}
            defaultValue={statusValueVille}
            onChange={(value: any) => {
              onSearch ? onSearch(value) : setStatusValueVille(value)
            }}
            options={optionsVille}
          />
        </Grid>
        <Grid sm={1}></Grid>
        <Grid sm={1.5}></Grid>
        <Grid item xs={12} sm={4}>
          <CustomTextField
            fullWidth
            label={'Télèphone '}
            name={'Télephone'}
            placeholder={'Tapez numéro'}
            value={companyData.Télephone}
            onChange={e => handleChange('Télephone', e.target.value)}
          />
        </Grid>
        <Grid sm={1}></Grid>
        <Grid item xs={12} sm={4}>
          <CustomTextField
            fullWidth
            label={'Fax '}
            name={'Fax'}
            placeholder={'Tapez fax'}
            value={companyData.Fax}
            onChange={e => handleChange('Fax', e.target.value)}
          />
        </Grid>
        <Grid sm={1}></Grid>
        <Grid sm={1.5}></Grid>
        <Grid item xs={12} sm={4}>
          <CustomTextField
            fullWidth
            label={'Email '}
            name={'Email'}
            placeholder={'Tapez email'}
            value={companyData.Email}
            onChange={e => handleChange('Email', e.target.value)}
          />
        </Grid>
      </Fragment>
    </>
  )
}
  )
}

export default AddContact
export default AddContact
