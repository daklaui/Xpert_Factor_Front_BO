import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
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
            <TableCell>Taux FDG</TableCell>
            <TableCell>Montant Max FDG</TableCell>
            <TableCell>Montant Min FDG</TableCell>
            <TableCell align='center'></TableCell>
          </TableRow>
        </TableHead>

        <TableBody sx={{ '& .MuiTableRow-root:nth-of-type(odd)': { backgroundColor: 'action.hover' } }}>
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>Bon de Commande</TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.TauxFDG}</CustomTextField>
              </TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMaxFDG}</CustomTextField>
              </TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMinFDG}</CustomTextField>
              </TableCell>
            </TableRow>
          ))}
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>Caution</TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.TauxFDG}</CustomTextField>
              </TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMaxFDG}</CustomTextField>
              </TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMinFDG}</CustomTextField>
              </TableCell>
            </TableRow>
          ))}
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>Facture</TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.TauxFDG}</CustomTextField>
              </TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMaxFDG}</CustomTextField>
              </TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMinFDG}</CustomTextField>
              </TableCell>
            </TableRow>
          ))}
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>Marché</TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.TauxFDG}</CustomTextField>
              </TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMaxFDG}</CustomTextField>
              </TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMinFDG}</CustomTextField>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default FondsDeGarantie
