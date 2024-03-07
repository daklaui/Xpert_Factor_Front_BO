import React, { useState } from 'react';
import { Grid, Typography, Card } from '@mui/material';

import InfoAcheteur from './BuyerInfo';
import TableAcheteur from './TableBuyer';

const AddBuyer= () => {
  const [selectedAdherent, setSelectedAdherent] = useState(null);


  return (
    <>
      <Grid container alignItems='center' justifyContent='space-between'>
        <Typography variant='h2' component='div' sx={{ mb: 2 }}>
          Ajouter Acheteur
        </Typography>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card>
            <InfoAcheteur onAdherentSelect={setSelectedAdherent} />
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <TableAcheteur adherent={selectedAdherent} />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default AddBuyer;

