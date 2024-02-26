import { Grid, Button, Typography} from '@mui/material'
import { Fragment, useState } from 'react'
import CustomTextField from 'src/@core/components/mui/text-field'
import CompanyData from 'src/pages/individual/Flow/Form_Individual/interface/FormIndividual.interface'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Bank = () => {
  const [companyData, setCompanyData] = useState<CompanyData[]>([
    {
      RIB: '',
      Bank: '',
      Agency: '',
    },
  ]);

  const handleChange = (
    index: number,
    field: keyof CompanyData,
    value: string
  ): void => {
    setCompanyData((prevData) => {
      const newData = [...prevData];
      newData[index][field] = value;

      return newData;
    });
  };

  const handleAddField = () => {
    setCompanyData((prevData) => [...prevData, { RIB: '', Agency: '', Bank: '' }]);
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
    <Fragment>
       {companyData.map((data, index) => (
        <Grid key={index} container spacing={1} alignItems='center' style={{ padding: '2%' }}>
          <Grid sm={1}>
            </Grid>
          <Grid>
            <CustomTextField
              fullWidth
              label={`RIB `}
              placeholder={'Tapez RIB '}
              value={data.RIB}
              onChange={e => handleChange(index, 'RIB', e.target.value)}
            />
          </Grid>
          <Grid sm={0.6}></Grid>
          <Grid >
            <CustomTextField
              fullWidth
              label={`Banque`}
              placeholder={'Tapez banque '}
              value={data.Bank}
              onChange={e => handleChange(index, 'Bank', e.target.value)}
            />
          </Grid>
          <Grid sm={0.6}></Grid>
          <Grid >
            <CustomTextField
              fullWidth
              label={`Agence `}
              placeholder={'Tapez Agence '}
              value={data.Agency}
              onChange={e => handleChange(index, 'Agency', e.target.value)}
            />
          </Grid>
          <Grid style={{ display: 'flex',justifyContent: 'flex-end', height: '60px' ,padding: '3%' }} sm={1.3}>
          <Button
              variant='contained'
              style={{ backgroundColor: 'rgba(255, 0, 0, 0.7)', color: 'wihte' }}
              startIcon={<DeleteOutlineIcon />}              
              onClick={() => handleResetFields(index)} >
            </Button>
          </Grid>
        </Grid>
     ))}
     <Grid
       style={{ display: 'flex', justifyContent: 'center', padding: '2%' }}
       sm={12}
     >
       <Button variant='contained' onClick={handleAddField}>
         Ajouter un champ
       </Button>
     </Grid>
   </Fragment>
 );
};

export default Bank;
