import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import CustomTextField from 'src/@core/components/mui/text-field'

const tableRows = [
  {
    id: 1,
    TypeFraisPaiement: '',
    MontantParInstrument: '',
    Libellé: 'null'
  }
]

const FraisDePaiement = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 500 }}>
        <TableHead>
          <TableRow>
            <TableCell>Type Frais Paiement</TableCell>
            <TableCell>Montant Par Instrument</TableCell>
            <TableCell>Libellé</TableCell>
            <TableCell align='center'></TableCell>
          </TableRow>
        </TableHead>

        <TableBody sx={{ '& .MuiTableRow-root:nth-of-type(odd)': { backgroundColor: 'action.hover' } }}>
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>C</TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantParInstrument}</CustomTextField>
              </TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.Libellé}</CustomTextField>
              </TableCell>
            </TableRow>
          ))}
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>T</TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantParInstrument}</CustomTextField>
              </TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.Libellé}</CustomTextField>
              </TableCell>
            </TableRow>
          ))}
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>V</TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantParInstrument}</CustomTextField>
              </TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.Libellé}</CustomTextField>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default FraisDePaiement
