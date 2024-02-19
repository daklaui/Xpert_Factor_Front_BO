import React from 'react'
import { Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const tableRows = [
  {
    id: 1,
    numeroContact: '123456789',
    nomPrenom: 'achmoataz',
    telephones: '50322452',
    email: 'm.daklaui@yahoo.com',
    fax: '+33 025 452 78',
    checked: true
  },
  {
    id: 2,
    numeroContact: '987456321',
    nomPrenom: 'achmoataz',
    telephones: '25895745',
    email: 'm.daklaui@yahoo.com',
    fax: '+33 025 452 78',
    checked: true
  }

  // Ajoutez d'autres lignes de tableau selon vos besoins
]

const TableContact = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 500 }}>
        <TableHead>
          <TableRow>
            <TableCell>Numero Contact</TableCell>
            <TableCell>Nom et Prenom</TableCell>
            <TableCell>Téléphones</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Fax</TableCell>
            <TableCell align='center'>Etat</TableCell>
          </TableRow>
        </TableHead>

        <TableBody sx={{ '& .MuiTableRow-root:nth-of-type(odd)': { backgroundColor: 'action.hover' } }}>
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell sx={{ fontSize: '1rem' }}>{row.numeroContact}</TableCell>
              <TableCell sx={{ fontSize: '1rem' }}>{row.nomPrenom}</TableCell>
              <TableCell sx={{ fontSize: '1rem' }}>{row.telephones}</TableCell>
              <TableCell sx={{ fontSize: '1rem' }}>{row.email}</TableCell>
              <TableCell sx={{ fontSize: '1rem' }}>{row.fax}</TableCell>
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

export default TableContact
