import React, { Fragment, useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import SelectAdherent from 'src/shared-components/custom-select/SelectAdherentList';
import SelectIndividuals from 'src/shared-components/custom-select/SelectIndividuals';
import SelectPaymentType from 'src/shared-components/custom-select/SelectPaymentType';
import SelectListOfDevises from 'src/shared-components/custom-select/SelectListOfDevises';
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker';
import DatePicker from 'react-datepicker';
import { DateType } from 'src/types/forms/reactDatepickerTypes';
import CustomInput from 'src/pages/Prorogations/Insert/PickersCustomInput';
import CustomTextField from 'src/@core/components/mui/text-field';

  const TabLimite = () => {
    const handleSearch = (value: any) => {
        console.log('Selected value:', value);
      };
    const [date, setDate] = useState<DateType>(new Date());
    const [LimiteAssu] = useState();
    const [LimiteFinanc] = useState();
    const [MontantLimAchAD] = useState();
    const [DélaiDemande] = useState();
      
  return (
    <Fragment>
      <Grid container spacing={1} style={{ height: '100%'}} xs={12} sm={12}> 
        <Card style={{ height: '100%' }}>
            <CardHeader />
            <CardContent>
                <Grid item xs={12} sm={12}>
                    <p>Nom Adhérent </p>
                    <SelectAdherent labelText='Nom adherent' onSearch={handleSearch} />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TableContainer sx={{ width: '100%', height: '100%' }}>
                        <Table>
                            <TableHead sx={{ fontSize: '12px', backgroundColor: '#e1bee7' }}>
                                <TableRow>
                                    <TableCell sx={{textAlign: 'center', }}>Nom Acheteur</TableCell>
                                    <TableCell sx={{textAlign: 'center', }}>Date Demande</TableCell>
                                    <TableCell sx={{textAlign: 'center', }}>Limite Assurance</TableCell>
                                    <TableCell sx={{textAlign: 'center', }}>Limite de Financement</TableCell>
                                    <TableCell sx={{textAlign: 'center', }}>Devise</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody sx={{ backgroundColor: 'action.hover' }}>
                                <TableRow>
                                <TableCell sx={{ textAlign: 'center',fontSize: '14px'}}>
                                    {
                                        <SelectIndividuals labelText='Nom Acheteur' onSearch={handleSearch} />
                                    }
                                </TableCell>
                                <TableCell sx={{ textAlign: 'center',fontSize: '12px'}}>
                                    {
                                        <DatePickerWrapper sx={{ fontSize: '10px'}}>
                                            <DatePicker selected={date} onChange={(date: Date) => setDate(date)} 
                                            customInput={<CustomInput />} />
                                        </DatePickerWrapper>
                                    }
                                </TableCell>
                                <TableCell sx={{ textAlign: 'center',fontSize: '12px'}}>
                                    {
                                        <CustomTextField
                                            fullWidth
                                            name={'Limite Assurance'}
                                            placeholder={'Tapez Limite '}
                                            value={LimiteAssu}
                                        />
                                    }   
                                </TableCell>
                                <TableCell sx={{textAlign: 'center',fontSize: '12px'}}>
                                    {
                                        <CustomTextField
                                            sx={{ fontSize: '12px'}}
                                            fullWidth
                                            name={'Limite de Financement'}
                                            placeholder={'Tapez Limite '}
                                            value={LimiteFinanc}
                                        />
                                    }
                                </TableCell>
                                <TableCell sx={{textAlign: 'center', fontSize: '14px'}}>
                                    {
                                        <SelectListOfDevises labelText='Devise' onSearch={handleSearch} />
                                    }
                                </TableCell>
                                </TableRow>         
                            </TableBody>
                        </Table>
                        <Table>
                            <TableHead sx={{ fontSize: '12px', backgroundColor: '#e1bee7' }}>
                                <TableRow>
                                    <TableCell sx={{textAlign: 'center' }}>Montant Limite Acheteur-Adhérent</TableCell>
                                    <TableCell sx={{textAlign: 'center', }}>Date Limite</TableCell>
                                    <TableCell sx={{textAlign: 'center', }}>Mode Paiement</TableCell>
                                    <TableCell sx={{textAlign: 'center', }}>Date Dernière demande</TableCell>
                                    <TableCell sx={{textAlign: 'center', }}>Délai demandé</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody sx={{ backgroundColor: 'action.hover' }}>
                                <TableRow>
                                <TableCell sx={{textAlign: 'center',fontSize: '12px'}}>
                                    {
                                        <CustomTextField
                                            fullWidth
                                            name={'Montant Limite Acheteur-Adhérent'}
                                            placeholder={'Tapez Montant '}
                                            value={MontantLimAchAD}
                                        />
                                    }
                                </TableCell>
                                <TableCell sx={{textAlign: 'center',fontSize: '12px'}}>
                                    {
                                        <DatePickerWrapper sx={{ fontSize: '10px'}}>
                                            <DatePicker selected={date} onChange={(date: Date) => setDate(date)} 
                                            customInput={<CustomInput />} />
                                        </DatePickerWrapper>
                                    }
                                </TableCell>
                                <TableCell sx={{textAlign: 'center',fontSize: '14px'}}>
                                    {
                                        <SelectPaymentType labelText='Mode Payment' onSearch={handleSearch} />

                                    }
                                </TableCell>
                                <TableCell sx={{textAlign: 'center',fontSize: '12px'}}>
                                    {
                                        <DatePickerWrapper sx={{ fontSize: '10px'}}>
                                        <DatePicker selected={date} onChange={(date: Date) => setDate(date)} 
                                        customInput={<CustomInput />} />
                                    </DatePickerWrapper>
                                    }
                                </TableCell>
                                <TableCell sx={{textAlign: 'center',fontSize: '12px'}}>
                                    {
                                        <CustomTextField
                                        fullWidth
                                        name={'Délai demandé'}
                                        placeholder={'Tapez Délait '}
                                        value={DélaiDemande}
                                    />
                                    }
                                </TableCell>
                                </TableRow>         
                            </TableBody>
                        </Table>
                    </TableContainer>  
                </Grid>
    
                <Grid xs={12} sm={12} container justifyContent="center" alignItems="center">
                <Box
                    sx={{
                        gap: 5,
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'center', 
                        textAlign: 'center', 
                    }}
                >
                    <Button type='submit' variant='contained' size='medium'>
                        Enregistrer
                    </Button>
                </Box>
            </Grid>
            </CardContent>
        </Card>
    </Grid>
    </Fragment>
   
    );
};

export default TabLimite;
