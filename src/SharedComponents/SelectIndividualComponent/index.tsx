import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker';
import Select from 'react-select';
import { getOptions } from './mockIndividu';
//@ts-ignore
import style from '../styles.module.scss'

interface Option {
  value: string;
  label: string;
}

const SelectIndividu = ({ onSearch, labelText }: any) => {

  const [options, setOptions] = useState<Option[]>([]);
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
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={14}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth sx={{ mr: 4, mb: 2 }}>
                <Select placeholder={'---Sélectionnez un individu---'}
                  defaultValue={statusValue}
                  onChange={(value: any) => {
                    onSearch ? onSearch(): setStatusValue(value)
                    labelText 
                  }}
                  options={options}
                  isClearable={isClearable}
                  className={style.Select1}
                  isSearchable
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default SelectIndividu;
