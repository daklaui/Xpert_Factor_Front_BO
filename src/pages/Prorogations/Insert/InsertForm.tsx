// ** React Imports
import { Fragment, useEffect, useState } from 'react';
import Select from 'react-select';

// ** MUI Imports
import {Box,Card,Grid,Button,CardHeader,CardContent} from '@mui/material';
import { DateType } from 'src/types/forms/reactDatepickerTypes';
import DatePicker from 'react-datepicker';
import CustomTextField from 'src/@core/components/mui/text-field';

import SelectAdherent from 'src/shared-components/custom-select/SelectAdherentList';
import CustomInput from 'src/pages/Prorogations/Insert/PickersCustomInput';
import SelectIndividuals from 'src/shared-components/custom-select/SelectIndividuals';
import TabProrogation from './TabProrogation';
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker';
import { generateFakeData } from '../Mock/factureMock';
import { CustomSelectProps, SelectInerface } from 'src/pages/individual/Flow/Form_Individual/interface/FormIndividual.interface';
import { getTypeProrog } from '../Mock/tabData';

const InsertForm = ({ onSearch }: CustomSelectProps) => {
  // ** States
  const [date, setDate] = useState<DateType>(new Date());
  const [formEcheance, setFormEcheance] = useState<DateType>(new Date());
  const [optionsTypeProrog, setOptionsTypeProrog] = useState<SelectInerface[]>([]);
  const [statusValueTypeProrog, setStatusValueTypeProrog] = useState('')
  const [MotifProrog] = useState();
  const fakeData = generateFakeData(5);

  const handleDateClick = (date: Date) => {
    setFormEcheance(date);
  };
  const handleSearch = (value: any) => {
    console.log('Selected value:', value);
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseTypeProrog = await getTypeProrog()
        setOptionsTypeProrog(responseTypeProrog.optionsTypeProrog)

      } catch (error) {
        console.error('Erreur lors de la récupération des options :', error)
      }
    }
    fetchData()
  }, [])

  return (
    <Fragment>
      <Grid container spacing={1} >
        {/* Form */}
        <Grid item xs={12} sm={4}>
          <Card style={{ height: '100%' }}>
            <CardHeader />
            <CardContent>
              <form onSubmit={(e) => e.preventDefault()} style={{ width: '300px' }}>
                <Grid container spacing={1} sx={{ flexDirection: 'column' }}>
                  <Grid item>
                    <p>Nom Adhérent </p>
                    <SelectAdherent labelText='Nom adherent' onSearch={handleSearch} />
                  </Grid>
                  <Grid item>
                    <p>Nom Acheteur</p>
                    <SelectIndividuals labelText='Nom Acheteur' onSearch={handleSearch} />
                  </Grid>
                  
                  <Grid item>
                    <p>Type Prorogation</p>
                    <Select
                      placeholder={'---Sélectionnez un type---'}
                      value={statusValueTypeProrog}  // Use value instead of defaultValue
                      onChange={(value: any) => {
                        console.log('Search value:', value)
                        onSearch ? onSearch(value) : setStatusValueTypeProrog(value)
                      }}
                      options={optionsTypeProrog}
                    />
                  </Grid>
                  {'\n'}
                  <Grid item>
                   <p>Motif prorogation</p> 
                    <CustomTextField
                      fullWidth
                      name={'Motif prorogation'}
                      placeholder={'Tapez nom '}
                      value={MotifProrog}
                    />
                  </Grid>
                  <Grid item>
                    <p>Echéance</p>
                    <DatePickerWrapper>
                      <DatePicker
                        selected={formEcheance}
                        onChange={(formEcheance: Date) => setFormEcheance(formEcheance)}
                        customInput={<CustomInput />}
                      />
                    </DatePickerWrapper>
                  </Grid>

                  <Grid item>
                    <p>Echéance Après Prorogation</p>
                    <DatePickerWrapper>
                      <DatePicker selected={date} onChange={(date: Date) => setDate(date)} customInput={<CustomInput />} />
                    </DatePickerWrapper>
                  </Grid>
                  <Grid item>
                    <Box
                      sx={{
                        gap: 5,
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Button type='submit' variant='contained' size='medium'>
                        Valider Prorogation
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={8} >
          <Card style={{ height: '100%' }}>
            <CardContent >
            <TabProrogation TableData={fakeData} onDateClick={handleDateClick} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default InsertForm;