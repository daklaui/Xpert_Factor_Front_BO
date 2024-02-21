import React from 'react'
import { Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const tableRows = [
  { id: 1, rib: '12345678922', bank: 'BH', agency: 'Agence BH Avenue de Carthage,Tunis', checked: true },
  { id: 2, rib: '33025452728', bank: 'BT', agency: 'Agence BT Avenue Habib Bourguiba,Tunis', checked: true },
  { id: 3, rib: '258957404555', bank: 'BNA', agency: 'Agence BNA Rue de la République,Sousse', checked: false },
  { id: 4, rib: '258957415245', bank: 'BIAT', agency: 'Banque Internationale Arabe de Tunisie (BIAT)', checked: false }
]

const TableRib = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 500 }}>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>RIB</TableCell>
            <TableCell>Banque</TableCell>
            <TableCell>Agence</TableCell>
            <TableCell align='center'>Etat</TableCell>
          </TableRow>
        </TableHead>

        <TableBody sx={{ '& .MuiTableRow-root:nth-of-type(odd)': { backgroundColor: 'action.hover' } }}>
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell sx={{ fontSize: '1rem' }}>{row.id}</TableCell>
              <TableCell sx={{ fontSize: '1rem' }}>{row.rib}</TableCell>
              <TableCell sx={{ fontSize: '1rem' }}>{row.bank}</TableCell>
              <TableCell sx={{ fontSize: '1rem' }}>{row.agency}</TableCell>
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

export default TableRib
