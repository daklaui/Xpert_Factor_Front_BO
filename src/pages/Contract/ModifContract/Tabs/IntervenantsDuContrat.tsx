import React from 'react'
import { Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const tableRows = [
  {
    id: 1,
    NomIntervenant: 'achmoataz',
    Role: '',
    RéférenceIntervenant: 'X1',
    RéférenceAdhérent: '8',
    checked: true
  }
]

const IntervenatsDuContrat = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 500 }}>
        <TableHead>
          <TableRow>
            <TableCell>Nom Intervenant</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Référence Intervenant</TableCell>
            <TableCell>Référence Adhérent</TableCell>
          </TableRow>
        </TableHead>

        <TableBody sx={{ '& .MuiTableRow-root:nth-of-type(odd)': { backgroundColor: 'action.hover' } }}>
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell sx={{ fontSize: '1rem' }}>{row.NomIntervenant}</TableCell>
              <TableCell sx={{ fontSize: '1rem' }}>{row.Role}</TableCell>
              <TableCell sx={{ fontSize: '1rem' }}>{row.RéférenceIntervenant}</TableCell>
              <TableCell sx={{ fontSize: '1rem' }}>{row.RéférenceAdhérent}</TableCell>
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

export default IntervenatsDuContrat
