import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import CustomTextField from 'src/@core/components/mui/text-field'

const tableRows = [
  {
    id: 1,
    TypeInstrument: '',
    TauxIntéretMarché: '',
    TauxMargeContrat: '',
    DélaiMaxPaiement: '',
    Pécompte: '',
    Major: '',
    DateDébutValidité: '',
    checked: true
  }
]

const InteretDeFinancement = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 500 }}>
        <TableHead>
          <TableRow>
            <TableCell>Type Instrument</TableCell>
            <TableCell>Taux Intéret Marché</TableCell>
            <TableCell>Taux Marge Contrat</TableCell>
            <TableCell>Délai Max Paiement</TableCell>
            <TableCell>Pécompte</TableCell>
            <TableCell>Major </TableCell>
            <TableCell>Date Début Validité</TableCell>
            <TableCell align='center'></TableCell>
          </TableRow>
        </TableHead>

        <TableBody sx={{ '& .MuiTableRow-root:nth-of-type(odd)': { backgroundColor: 'action.hover' } }}>
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>C </TableCell>

              <CustomTextField sx={{ fontSize: '1rem' }}>{row.TauxIntéretMarché}</CustomTextField>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.TauxMargeContrat}</CustomTextField>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.DélaiMaxPaiement}</CustomTextField>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.Pécompte}</CustomTextField>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.Major}</CustomTextField>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.DateDébutValidité}</CustomTextField>
              <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                <Checkbox defaultChecked={row.checked} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default InteretDeFinancement
