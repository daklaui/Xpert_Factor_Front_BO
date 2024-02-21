import React from 'react'
import { Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import CustomTextField from 'src/@core/components/mui/text-field'

const tableRows = [
  {
    id: 1,
    LibelléFDG: '',
    TauxFDG: '',
    MontantMaxFDG: '',
    MontantMinFDG: '',

    checked: true
  }
]

const FondsDeGarantie = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 500 }}>
        <TableHead>
          <TableRow>
            <TableCell>Libellé FDG</TableCell>
            <TableCell>Taux FDG </TableCell>
            <TableCell>Montant Max FDG</TableCell>
            <TableCell>Montant Min FDG</TableCell>

            <TableCell align='center'></TableCell>
          </TableRow>
        </TableHead>

        <TableBody sx={{ '& .MuiTableRow-root:nth-of-type(odd)': { backgroundColor: 'action.hover' } }}>
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>Bon de Commande </TableCell>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.TauxFDG}</CustomTextField>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMaxFDG}</CustomTextField>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMinFDG}</CustomTextField>
            </TableRow>
          ))}
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>Caution </TableCell>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.TauxFDG}</CustomTextField>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMaxFDG}</CustomTextField>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMinFDG}</CustomTextField>
            </TableRow>
          ))}
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>Facture </TableCell>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.TauxFDG}</CustomTextField>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMaxFDG}</CustomTextField>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMinFDG}</CustomTextField>
            </TableRow>
          ))}
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>Marché </TableCell>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.TauxFDG}</CustomTextField>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMaxFDG}</CustomTextField>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMinFDG}</CustomTextField>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default FondsDeGarantie
