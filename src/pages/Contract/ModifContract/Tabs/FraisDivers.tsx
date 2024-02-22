import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import CustomTextField from 'src/@core/components/mui/text-field'

const tableRows = [
  {
    id: 1,
    TypeFrais: '',
    MontantParUnité: '',
    LibelléFrais: ''
  }
]

const FraisDivers = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 500 }}>
        <TableHead>
          <TableRow>
            <TableCell>Type Frais</TableCell>
            <TableCell>Montant Par Unité</TableCell>
            <TableCell>Libellé Frais</TableCell>
            <TableCell align='center'></TableCell>
          </TableRow>
        </TableHead>

        <TableBody sx={{ '& .MuiTableRow-root:nth-of-type(odd)': { backgroundColor: 'action.hover' } }}>
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>GAR</TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantParUnité}</CustomTextField>
              </TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.LibelléFrais}</CustomTextField>
              </TableCell>
            </TableRow>
          ))}
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>Imp</TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantParUnité}</CustomTextField>
              </TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.LibelléFrais}</CustomTextField>
              </TableCell>
            </TableRow>
          ))}
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>Lit</TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantParUnité}</CustomTextField>
              </TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.LibelléFrais}</CustomTextField>
              </TableCell>
            </TableRow>
          ))}
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>OP</TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantParUnité}</CustomTextField>
              </TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.LibelléFrais}</CustomTextField>
              </TableCell>
            </TableRow>
          ))}
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>ProE</TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantParUnité}</CustomTextField>
              </TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.LibelléFrais}</CustomTextField>
              </TableCell>
            </TableRow>
          ))}
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>ProL</TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantParUnité}</CustomTextField>
              </TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.LibelléFrais}</CustomTextField>
              </TableCell>
            </TableRow>
          ))}
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>Ret</TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantParUnité}</CustomTextField>
              </TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.LibelléFrais}</CustomTextField>
              </TableCell>
            </TableRow>
          ))}
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>SurC</TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantParUnité}</CustomTextField>
              </TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.LibelléFrais}</CustomTextField>
              </TableCell>
            </TableRow>
          ))}
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>Tim</TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantParUnité}</CustomTextField>
              </TableCell>
              <TableCell>
                <CustomTextField sx={{ fontSize: '1rem' }}>{row.LibelléFrais}</CustomTextField>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default FraisDivers
