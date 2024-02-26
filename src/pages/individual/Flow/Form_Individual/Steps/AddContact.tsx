import React, { Fragment, useEffect, useState } from 'react';
import { Checkbox, FormControl, FormControlLabel, Grid, Button, Typography } from '@mui/material';
import Select from 'react-select';
import CustomTextField from 'src/@core/components/mui/text-field';
import { CustomSelectProps, SelectInerface } from '../interface/FormIndividual.interface';
import { getVille } from '../mock';
import CompanyData from 'src/pages/individual/Flow/Form_Individual/interface/FormIndividual.interface';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const AddContact = ({ onSearch }: CustomSelectProps) => {
  const [optionsVille, setOptionsVille] = useState<SelectInerface[]>([]);
  const [statusValueVille, setStatusValueVille] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseVille = await getVille();
        setOptionsVille(responseVille.optionsVille);
      } catch (error) {
        console.error('Erreur lors de la récupération des options :', error);
      }
    };
    fetchData();
  }, []);

  const initialCompanyState = {
    Name: '',
    Télephone: '',
    Position: '',
    Fax: '',
    Email: '',
    Situation: '',
    Contact: '',
  };

  const [companyData, setCompanyData] = useState<CompanyData[]>([initialCompanyState]);

  const handleChange = (field: keyof CompanyData, value: string): void => {
    setCompanyData((prevData) => {
      const updatedData = { ...prevData[0], [field]: value };
      return [updatedData];
    });
  };

  const handleAddContact = () => {
    setCompanyData((prevData) => [...prevData, { ...initialCompanyState }]);
  };

  const handleResetFields = (index: number) => {
    setCompanyData((prevData) => {
      if (prevData.length > 1) {
        const newData = [...prevData.slice(0, index), ...prevData.slice(index + 1)];
        return newData;
      }
      return prevData;
    });
  };

  return (
    <>
      <Fragment>
        {companyData.map((data, index) => (
          <Grid key={index} container spacing={1} alignItems='center' style={{ padding: '2%' }}>
            <Grid sm={1}>
              <Typography variant="subtitle1" gutterBottom >
                {`Contact ${index + 1}`}
              </Typography>
            </Grid>
            <Grid sm={1.5}></Grid>
            <Grid item xs={12} sm={4}>
              <CustomTextField
                fullWidth
                label={'Nom et prénom '}
                name={'Nom et prénom '}
                placeholder={'Tapez nom'}
                value={companyData[0].Name}
                onChange={(e) => handleChange('Name', e.target.value)}
              />
            </Grid>
            <Grid sm={1}></Grid>
            <Grid item sm={4}>
              position
              <Select
                placeholder={'---Sélectionnez une position---'}
                defaultValue={statusValueVille}
                onChange={(value: any) => {
                  onSearch ? onSearch(value) : setStatusValueVille(value);
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
                value={companyData[0].Télephone}
                onChange={(e) => handleChange('Télephone', e.target.value)}
              />
            </Grid>
            <Grid sm={1}></Grid>
            <Grid item xs={12} sm={4}>
              <CustomTextField
                fullWidth
                label={'Fax '}
                name={'Fax'}
                placeholder={'Tapez fax'}
                value={companyData[0].Fax}
                onChange={(e) => handleChange('Fax', e.target.value)}
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
                value={companyData[0].Email}
                onChange={(e) => handleChange('Email', e.target.value)}
              />
            </Grid>
            <Grid sm={1}></Grid>
            <Grid item xs={12} sm={4}>
              <FormControl>
                <Grid item xs={12} sm={4}>
                  <FormControlLabel
                    label="Situation"
                    control={
                      <Checkbox
                        checked={Boolean(companyData[0].Situation)}
                        onChange={(e) => handleChange('Situation', e.target.checked.toString())}
                        color="primary"
                      />
                    }
                  />
                </Grid>
              </FormControl>
            </Grid>
            <Grid style={{ display: 'flex', justifyContent: 'flex-end', padding: '2%', marginLeft: 'auto' }} sm={12}>
              <Button
                  variant='contained'
                  style={{ backgroundColor: 'rgba(255, 0, 0, 0.7)', color: 'wihte'}}
                  startIcon={<DeleteOutlineIcon />}  
                  onClick={() => handleResetFields(index)} >
                  Supprimer
                </Button>
          </Grid>
          </Grid>
        ))}
        <Grid style={{ display: 'flex', justifyContent: 'center', padding: '2%' }} sm={12}>
          <Button variant="contained" color="primary" onClick={handleAddContact}>
            Ajouter un contact
          </Button>
        </Grid>
      </Fragment>
    </>
  );
};

export default AddContact;
