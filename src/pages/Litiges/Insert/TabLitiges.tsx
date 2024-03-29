import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import TableRows from '../Mock/tabData'

interface TabLitigesProps {
  TableData: TableRows[]
  onMontantTTCClick?: (montantTTC: number) => void // Optional callback for external usage
}

const TabLitiges = ({ TableData, onMontantTTCClick }: TabLitigesProps) => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 500 }}>
        <TableHead sx={{ '& .MuiTableRow-root:nth-of-type(odd)': { backgroundColor: '#e1bee7' } }}>
          <TableRow>
            <TableCell>Réf Facture</TableCell>
            <TableCell>Nom Acheteur</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Retenue</TableCell>
            <TableCell onClick={event => onMontantTTCClick && onMontantTTCClick(Number(event.target.textContent))}>
              Montant TTC
            </TableCell>
            <TableCell>Montant Ouvert</TableCell>
          </TableRow>
        </TableHead>

        <TableBody sx={{ '& .MuiTableRow-root:nth-of-type(odd)': { backgroundColor: 'action.hover' } }}>
          {TableData.map((row: any) => (
            <TableRow key={row.id}>
              <TableCell sx={{ fontSize: '1rem' }}>{row.RéfFacture}</TableCell>
              <TableCell sx={{ fontSize: '1rem' }}>{row.NomAcheteur}</TableCell>
              <TableCell sx={{ fontSize: '1rem' }}>{row.Date}</TableCell>
              <TableCell sx={{ fontSize: '1rem' }}>{row.Retenu}</TableCell>
              <TableCell
                sx={{ fontSize: '1rem' }}
                onClick={event => onMontantTTCClick && onMontantTTCClick(Number(event.target.textContent))}
              >
                {row.MontantTTC}
              </TableCell>
              <TableCell sx={{ fontSize: '1rem' }}>{row.MontantOuvert}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TabLitiges
