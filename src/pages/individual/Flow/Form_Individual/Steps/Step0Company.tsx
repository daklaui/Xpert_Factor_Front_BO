import { useState, Fragment, useEffect } from "react";
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';
import { Grid, TextField, RadioGroup, FormControlLabel, Radio, Box } from "@mui/material";
import { getJuridique, getActivite, getGroupeSociete } from '../mock';
import { CustomSelectProps , SelectInerface } from '../interface/FormIndivInterfaces';
const Step0Company = ({ onSearch, labelText }: CustomSelectProps) => {
  const [optionsJuridique, setOptionsJuridique] = useState<SelectInerface[]>([])
  const [statusValueJuridique, setStatusValueJuridique] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getJuridique()
        setOptionsJuridique(response.optionsJuridique)
      } catch (error) {
        console.error('Erreur lors de la récupération des options :', error)
      }
    }

    fetchData()
  }, [])
  const initialCompanyState = {
    date: new Date(),
    juridique: '',
    denomination: '',
    nom_com: '',
    reg_com: '',
    lieu: '',
    grp_soc: '',
    activite: '',
    selectDisabled: false,
  };
  
  const [companyData, setCompanyData] = useState(initialCompanyState);

  function handleChange(field: string, value: string): void {
    let updatedData = { ...companyData, [field]: value };

    if (field === 'grp_soc') {
      updatedData = { ...updatedData, selectDisabled: value === 'Non' };
    }

    setCompanyData(updatedData);
  }

  return (
    <>
      <Fragment>
        <Grid item xs={12} sm={6}>
          <p>Forme juridique</p>
          <Select
            placeholder={'---Sélectionnez une forme---'}
            defaultValue={statusValueJuridique}
            onChange={(value: any) => {
              onSearch ? onSearch(value) : setStatusValueJuridique(value)
            }}
            options={optionsJuridique}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* Change all the TextField with anis input */}
          <p>Dénomination </p>
          <TextField fullWidth value={companyData.denomination} onChange={(e) => handleChange('denomination', e.target.value)} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Nom de commerce </p>
          <TextField fullWidth value={companyData.nom_com} onChange={(e) => handleChange('nom_com', e.target.value)} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Register de commerce</p>
          <TextField fullWidth value={companyData.reg_com} onChange={(e) => handleChange('reg_com', e.target.value)} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Activité</p>
          <Select
            options={getActivite}
            value={{ value: companyData.activite, label: companyData.activite }}
            onChange={(getActivite: { value: string }) => handleChange('activite', getActivite.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Lieu</p>
          <TextField fullWidth value={companyData.lieu} onChange={(e) => handleChange('lieu', e.target.value)} />
        </Grid>
        <Grid container alignItems='center' item xs={12} sm={6}>
          <p>Groupe de sociétés</p>
          <RadioGroup row name='groupe-de-societes' onChange={(event) => handleChange('grp_soc', event.target.value)} value={companyData.grp_soc}>
            <FormControlLabel value='Oui' control={<Radio />} label='Oui' />
            <FormControlLabel value='Non' control={<Radio />} label='Non' />
          </RadioGroup>
        </Grid>
            <Grid item xs={12} sm={6}>
            <p>Groupe de sociétés</p>
            <Select
              options={getGroupeSociete}
              value={{ value: companyData.grp_soc, label: companyData.grp_soc }}
              onChange={(getGroupeSociete: { value: string; }) => handleChange('grp_soc', getGroupeSociete.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <p>Date de création</p>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
              <DatePicker
                selected={companyData.date}
                onChange={(date: Date) => handleChange('date', date.toISOString())}
              />
            </div>
          </Box>
        </Grid>
      </Fragment>
    
    </>
  )
}
export default Step0Company 