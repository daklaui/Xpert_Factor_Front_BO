import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import Select from 'react-select';
import { getOptions } from './mockAdherent';
import {  SelectInerface } from '../SelectInterface';

const SelectAdherent = ({ onSearch, labelText }: any) => {

  const [options, setOptions] = useState<SelectInerface[]>([]);
  const [statusValue, setStatusValue] = useState('');
  const [isClearable, setIsClearable] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getOptions();
        setOptions(response.options);
      } catch (error) {
        console.error('Erreur lors de la récupération des options :', error);
      }
    };

    fetchData();
  }, []);


  return (
    
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth sx={{ mr: 4, mb: 2 }}>

                <Select placeholder={'---Sélectionnez un adhérent---'}
                  defaultValue={statusValue}
                  onChange={(value: any) => {
                    onSearch ? onSearch() :  setStatusValue(value)
                    labelText 
                   }}
                  options={options} 
                  isClearable={isClearable}
                  />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  

  )
}

export default SelectAdherent;