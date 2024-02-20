import { Box, FormControlLabel, Grid, Radio, RadioGroup, TextField } from "@mui/material";
import { useState } from "react";
import DatePicker from 'react-datepicker';

const Step1TVA = () => {
  const [companyData, setCompanyData] = useState({
    date: new Date(),
    Code_TVA: '',
    ExonerationTVA: '',
    selectDisabled: false,
  });

  const handleChange = (field: string, value: string | Date): void => {
    setCompanyData((prevData) => ({
      ...prevData,
      [field]: value,
      selectDisabled: field === 'ExonerationTVA' ? value === 'Non' : prevData.selectDisabled,
    }));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <p>Code TVA</p>
        <TextField fullWidth value={companyData.Code_TVA} onChange={(e) => handleChange('Code_TVA', e.target.value)} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <p>Exonération TVA</p>
        <RadioGroup row name='ExonerationTVA' onChange={(event) => handleChange('ExonerationTVA', event.target.value)} value={companyData.ExonerationTVA}>
          <FormControlLabel value='Oui' control={<Radio />} label='Oui' />
          <FormControlLabel value='Non' control={<Radio />} label='Non' />
        </RadioGroup>
      </Grid>
      {['Début', 'Fin'].map((suffix) => (
        <Grid key={suffix} item xs={12} sm={6}>
          <p>Date {suffix} Exonération TVA</p>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
              <DatePicker selected={companyData.date} onChange={(date: Date) => handleChange('date', date)} />
            </div>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default Step1TVA;
