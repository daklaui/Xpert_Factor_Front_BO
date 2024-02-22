import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import CustomTextField from 'src/@core/components/mui/text-field'

const tableRows = [
  {
    id: 1,
    TypeCommission: '',
    TauxCommission: '',
    MontantMinDocument: '',
    MontantMinContart: '',

    checked: true
  }
]

const CommissionsDeFactoring = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 500 }}>
        <TableHead>
          <TableRow>
            <TableCell>Type Commission</TableCell>
            <TableCell>Taux Commission</TableCell>
            <TableCell>Montant Min Document</TableCell>
            <TableCell> Montant Min Contart</TableCell>

            <TableCell align='center'></TableCell>
          </TableRow>
        </TableHead>

        <TableBody sx={{ '& .MuiTableRow-root:nth-of-type(odd)': { backgroundColor: 'action.hover' } }}>
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>BC </TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.TauxCommission}</CustomTextField>
              </TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMinDocument}</CustomTextField>
              </TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMinContart}</CustomTextField>
              </TableCell>
            </TableRow>
          ))}
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>C </TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.TauxCommission}</CustomTextField>
              </TableCell>
              <TableCell>
                {' '}
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMinDocument}</CustomTextField>
              </TableCell>
              <TableCell>
                {' '}
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMinContart}</CustomTextField>
              </TableCell>
            </TableRow>
          ))}
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>F </TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.TauxCommission}</CustomTextField>
              </TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMinDocument}</CustomTextField>
              </TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMinContart}</CustomTextField>
              </TableCell>
            </TableRow>
          ))}
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>M </TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.TauxCommission}</CustomTextField>
              </TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMinDocument}</CustomTextField>
              </TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMinContart}</CustomTextField>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CommissionsDeFactoring
