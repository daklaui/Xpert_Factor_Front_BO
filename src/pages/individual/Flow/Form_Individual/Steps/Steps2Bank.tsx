import { Grid, TextField } from "@mui/material";
import { useState } from "react";

interface CompanyData {
  RIB: string;
  agence: string;
  banque: string;
}

const Step2Bank = () => {
  const [companyData, setCompanyData] = useState<CompanyData>({
    RIB: '',
    agence: '',
    banque: '',
  });

  const handleChange = (field: keyof CompanyData, value: string): void => {
    setCompanyData((prevData) => ({ ...prevData, [field]: value }));
  };

  return (
    <Grid container spacing={2}>
      {['RIB', 'banque', 'agence'].map((field) => (
        <Grid key={field} item xs={12} sm={6}>
          <p>{field.charAt(0).toUpperCase() + field.slice(1)}</p>
          <TextField
            fullWidth
            value={companyData[field as keyof CompanyData]} // Type assertion here
            onChange={(e) => handleChange(field as keyof CompanyData, e.target.value)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Step2Bank;
