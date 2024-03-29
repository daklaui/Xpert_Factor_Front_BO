import React, { Fragment, useState } from 'react';
import { Button, Card, CardContent, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp'; 

const Resolution = () => {
  return (
    <Fragment>
      <Grid container spacing={1} style={{ height: '100%' }} xs={12} sm={12}>
        <Card style={{ height: '100%' }}>
          <CardContent>
            <Grid item xs={12} sm={12}>
              <TableContainer sx={{ width: '100%', height: '100%' }}>
                <Table>
                  <TableHead sx={{ fontSize: '14px', backgroundColor: '#e1bee7' }}>
                    <TableRow>
                      <TableCell sx={{ textAlign: 'center' }}>Nom Adhérent</TableCell>
                      <TableCell sx={{ textAlign: 'center' }}>Type</TableCell>
                      <TableCell sx={{ textAlign: 'center' }}>Référence</TableCell>
                      <TableCell sx={{ textAlign: 'center' }}>Montant Ouvert</TableCell>
                      <TableCell sx={{ textAlign: 'center' }}>ÉCHÉANCE Litige</TableCell>
                      <TableCell sx={{ textAlign: 'center' }}>Montant Litige</TableCell>
                      <TableCell sx={{ textAlign: 'center' }}>#</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody sx={{ backgroundColor: 'action.hover' }}>
                    <TableRow>
                      <TableCell sx={{ textAlign: 'center', fontSize: '12px' }}>{}</TableCell>
                      <TableCell sx={{ textAlign: 'center', fontSize: '12px' }}>{}</TableCell>
                      <TableCell sx={{ textAlign: 'center', fontSize: '12px' }}>{}</TableCell>
                      <TableCell sx={{ textAlign: 'center', fontSize: '12px' }}>{}</TableCell>
                      <TableCell sx={{ textAlign: 'center', fontSize: '12px' }}>{}</TableCell>
                      <TableCell sx={{ textAlign: 'center', fontSize: '12px' }}>{}</TableCell>
                      <TableCell sx={{ textAlign: 'center', fontSize: '12px' }}>
                        <Button
                          variant='contained'
                          style={{ backgroundColor: 'rgba(0, 128, 0, 0.7)', color: 'white' }}
                          startIcon={<ThumbUpIcon />} 
                        >
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Fragment>
  );
};

export default Resolution;
