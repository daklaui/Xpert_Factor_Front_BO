import { Checkbox, Grid, Select, SelectChangeEvent, TextField } from "@mui/material";
import { useState, Fragment } from "react";
import Email from "src/store/apps/email";
import { getVille } from "../mock";


const Step4AddContact = () => {
  const initialCompanyState = {
    Name: '',
    Telephone: '',
    Ville: '',
    Fax: '',
    Email: '',
    Situation: '',
  };

  const [companyData, setCompanyData] = useState(initialCompanyState);

  function handleChange(field: string, value: string): void {
    const updatedData = { ...companyData, [field]: value };
    setCompanyData(updatedData);
  }

  return (
    <>
      <Fragment>
        <Grid item xs={12} sm={6}>
          <p>Nom et prénom</p>
          <TextField fullWidth value={companyData.Name} onChange={(e) => handleChange('Name', e.target.value)} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Télèphone</p>
          <TextField fullWidth value={companyData.Telephone} onChange={(e) => handleChange('Telephone', e.target.value)} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Fax</p>
          <TextField fullWidth value={companyData.Fax} onChange={(e) => handleChange('Fax', e.target.value)} />
        </Grid>
        <Grid item xs={12} sm={6}>
            <Email fullWidth value={companyData.Email} onChange={(e) => handleChange('Email', e.target.value)}>
                Email
            </Email>
        </Grid>
        <Grid item xs={12} sm={6}>
            <p>Position</p>
            <Select
                options={getVille}
                value={{ value: companyData.Ville, label: companyData.Ville }}
                onChange={(event: SelectChangeEvent<{ value: string; label: string }>) =>
                handleChange('Ville', event.target.value)
                }
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <p>Situation</p>
            <Checkbox value={Situation} onChange={e => setSituation(e.target.value)} />
        </Grid>
        
      </Fragment>
    </>
  );
};

export default Step4AddContact;