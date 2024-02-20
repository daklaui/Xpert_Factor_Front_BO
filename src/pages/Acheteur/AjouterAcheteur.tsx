import React from 'react';
import { Grid, Typography, Card, CardHeader } from '@mui/material';

import InfoAcheteur from './InfoAcheteur';
import TableAcheteur from './TableAcheteur';

const AjouterAcheteur = ({ }) => {

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
          <InfoAcheteur/>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
          <TableAcheteur />
            
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default AjouterAcheteur;
