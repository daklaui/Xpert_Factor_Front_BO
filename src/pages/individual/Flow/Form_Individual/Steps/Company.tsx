import React, { useState, Fragment, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import Select from 'react-select'
import 'react-datepicker/dist/react-datepicker.css'
import { Grid, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material'
import { getJuridique, getActivite, getGroupeSociete } from '../mock'
import { CustomSelectProps, SelectInerface } from '../interface/FormIndividual.interface'
import CustomTextField from 'src/@core/components/mui/text-field'
import React, { useState, Fragment, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import Select from 'react-select'
import 'react-datepicker/dist/react-datepicker.css'
import { Grid, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material'
import { getJuridique, getActivite, getGroupeSociete } from '../mock'
import { CustomSelectProps, SelectInerface } from '../interface/FormIndividual.interface'
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Custom Component Imports
import CustomInput from '../PickersCustomInput'
import CustomInput from '../PickersCustomInput'

const Company = ({ onSearch }: CustomSelectProps) => {
  const [optionsJuridique, setOptionsJuridique] = useState<SelectInerface[]>([])
  const [statusValueJuridique, setStatusValueJuridique] = useState('')
  const [optionsJuridique, setOptionsJuridique] = useState<SelectInerface[]>([])
  const [statusValueJuridique, setStatusValueJuridique] = useState('')

  const [optionsActivite, setOptionsActivite] = useState<SelectInerface[]>([])
  const [statusValueActivite, setStatusValueActivite] = useState('')
  const [optionsActivite, setOptionsActivite] = useState<SelectInerface[]>([])
  const [statusValueActivite, setStatusValueActivite] = useState('')

  const [optionsGroupeSociete, setOptionsGroupeSociete] = useState<SelectInerface[]>([])
  const [statusValueGroupeSociete, setStatusValueGroupeSociete] = useState('')
  const [optionsGroupeSociete, setOptionsGroupeSociete] = useState<SelectInerface[]>([])
  const [statusValueGroupeSociete, setStatusValueGroupeSociete] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseJuridique = await getJuridique()
        setOptionsJuridique(responseJuridique.optionsJuridique)
        const responseJuridique = await getJuridique()
        setOptionsJuridique(responseJuridique.optionsJuridique)

        const responseActivite = await getActivite()
        setOptionsActivite(responseActivite.optionsActivite)
        const responseActivite = await getActivite()
        setOptionsActivite(responseActivite.optionsActivite)

        const responseGroupeSociete = await getGroupeSociete()
        setOptionsGroupeSociete(responseGroupeSociete.optionsGroupeSociete)
        const responseGroupeSociete = await getGroupeSociete()
        setOptionsGroupeSociete(responseGroupeSociete.optionsGroupeSociete)
      } catch (error) {
        console.error('Erreur lors de la récupération des options :', error)
        console.error('Erreur lors de la récupération des options :', error)
      }
    }
    fetchData()
  }, [])
  const [date, setDate] = useState(new Date())
    }
    fetchData()
  }, [])
  const [date, setDate] = useState(new Date())

  const initialCompanyState = {
    juridique: '',
    Dénomination: '',
    Nom_com: '',
    Reg_com: '',
    Lieu: '',
    Grp_soc: '',
    Activite: '',
    selectDisabled: false
  }
    selectDisabled: false
  }

  const [companyData, setCompanyData] = useState(initialCompanyState)
  const [companyData, setCompanyData] = useState(initialCompanyState)

  function handleChange(field: string, value: string): void {
    let updatedData = { ...companyData, [field]: value }
    let updatedData = { ...companyData, [field]: value }

    if (field === 'Grp_soc') {
      updatedData = { ...updatedData, selectDisabled: value === 'Non' }
      updatedData = { ...updatedData, selectDisabled: value === 'Non' }
    }

    setCompanyData(updatedData)
    setCompanyData(updatedData)
  }

  return (
    <>
      <Fragment>
        <Grid sm={1.5}></Grid>
        <Grid item sm={4}>
          <p>Forme juridique</p>
          <Select
            placeholder={'---Sélectionnez une forme---'}
            defaultValue={statusValueJuridique}
            onChange={(value: any) => {
              console.log('Search value:', value)
              onSearch ? onSearch(value) : setStatusValueJuridique(value)
              console.log('Search value:', value)
              onSearch ? onSearch(value) : setStatusValueJuridique(value)
            }}
            options={optionsJuridique}
          />
        </Grid>
        <Grid sm={1}></Grid>
        <Grid item sm={4}>
          <p>Activité</p>
          <Select
            placeholder={'---Sélectionnez un activité---'}
            defaultValue={statusValueActivite}
            onChange={(value: any) => {
              onSearch ? onSearch(value) : setStatusValueActivite(value)
              onSearch ? onSearch(value) : setStatusValueActivite(value)
            }}
            options={optionsActivite}
          />
        </Grid>
        <Grid sm={1.5}></Grid>

        <Grid sm={1.5}></Grid>
        <Grid item xs={12} sm={4}>
          <CustomTextField
            fullWidth
            label={'Dénomination '}
            name={'Dénomination'}
            placeholder={'Tapez nom '}
            value={companyData.Dénomination}
            onChange={e => handleChange('Dénomination', e.target.value)}
            onChange={e => handleChange('Dénomination', e.target.value)}
          />
        </Grid>
        <Grid sm={1}></Grid>
        <Grid item xs={12} sm={4}>
          <CustomTextField
            fullWidth
            label={'Nom de commerce '}
            name={'Nom_com'}
            placeholder={'Tapez nom commerce '}
            value={companyData.Nom_com}
            onChange={e => handleChange('Nom_com', e.target.value)}
            onChange={e => handleChange('Nom_com', e.target.value)}
          />
        </Grid>
        <Grid sm={1.5}></Grid>

        <Grid sm={1.5}></Grid>
        <Grid item xs={12} sm={4}>
          <CustomTextField
            fullWidth
            label={'Register de commerce '}
            name={'Reg_com'}
            placeholder={'Tapez register '}
            value={companyData.Reg_com}
            onChange={e => handleChange('Reg_com', e.target.value)}
            onChange={e => handleChange('Reg_com', e.target.value)}
          />
        </Grid>
        <Grid sm={1}></Grid>
        <Grid item xs={12} sm={4}>
          <CustomTextField
            fullWidth
            label={'Lieu '}
            name={'Lieu'}
            placeholder={'Tapez lieu '}
            value={companyData.Lieu}
            onChange={e => handleChange('Lieu', e.target.value)}
            onChange={e => handleChange('Lieu', e.target.value)}
          />
        </Grid>
        <Grid sm={1.5}></Grid>

        <Grid sm={1.5}></Grid>

        <Grid item xs={12} sm={2}>
          <p>Date de création</p>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
              <DatePicker selected={date} onChange={(date: Date) => setDate(date)} customInput={<CustomInput />} />
            </div>
          </Box>
        </Grid>

        <Grid container alignItems='center' item xs={12} sm={2}>
          <p>Groupes de Sociétes</p>
          <RadioGroup
            row
            name='Grp_soc'
            onChange={event => handleChange('Grp_soc', event.target.value)}
            onChange={event => handleChange('Grp_soc', event.target.value)}
            value={companyData.Grp_soc}
          >
            <FormControlLabel value='Oui' control={<Radio />} label='Oui' />
            <FormControlLabel value='Non' control={<Radio />} label='Non' />
          </RadioGroup>
        </Grid>

        <Grid sm={1}></Grid>

        <Grid item xs={12} sm={4}>
          <p>Groupe de sociétés</p>
          <Select
            placeholder={'---Sélectionnez un groupe---'}
            defaultValue={statusValueGroupeSociete}
            onChange={(value: any) => {
              console.log('Search value:', value)
              onSearch ? onSearch(value) : setStatusValueGroupeSociete(value)
              console.log('Search value:', value)
              onSearch ? onSearch(value) : setStatusValueGroupeSociete(value)
            }}
            options={optionsGroupeSociete}
          />
        </Grid>
        <Grid sm={1.5}></Grid>

        <Grid sm={1.5}></Grid>
      </Fragment>
    </>
  )
}
  )
}

export default Company

export default Company
