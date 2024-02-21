import React from 'react'
import { Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import CustomTextField from 'src/@core/components/mui/text-field'

const tableRows = [
  {
    id: 1,
    TypeFrais: '',
    MontantParUnité: '',
    LibelléFrais: '',

    checked: true
  }
]

const FraisDivers = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 500 }}>
        <TableHead>
          <TableRow>
            <TableCell>Type Frais</TableCell>
            <TableCell>Montant Par Unité </TableCell>
            <TableCell> Libellé Frais</TableCell>

            <TableCell align='center'></TableCell>
          </TableRow>
        </TableHead>

        <TableBody sx={{ '& .MuiTableRow-root:nth-of-type(odd)': { backgroundColor: 'action.hover' } }}>
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>GAR </TableCell>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantParUnité}</CustomTextField>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.LibelléFrais}</CustomTextField>
              <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                <Checkbox defaultChecked={row.checked} />
              </TableCell>
            </TableRow>
          ))}
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>Imp </TableCell>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantParUnité}</CustomTextField>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.LibelléFrais}</CustomTextField>
              <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                <Checkbox defaultChecked={row.checked} />
              </TableCell>
            </TableRow>
          ))}
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>Lit </TableCell>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantParUnité}</CustomTextField>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.LibelléFrais}</CustomTextField>
              <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                <Checkbox defaultChecked={row.checked} />
              </TableCell>
            </TableRow>
          ))}
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>OP </TableCell>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantParUnité}</CustomTextField>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.LibelléFrais}</CustomTextField>
              <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                <Checkbox defaultChecked={row.checked} />
              </TableCell>
            </TableRow>
          ))}
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>ProE </TableCell>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantParUnité}</CustomTextField>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.LibelléFrais}</CustomTextField>
              <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                <Checkbox defaultChecked={row.checked} />
              </TableCell>
            </TableRow>
          ))}
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>ProL </TableCell>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantParUnité}</CustomTextField>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.LibelléFrais}</CustomTextField>
              <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                <Checkbox defaultChecked={row.checked} />
              </TableCell>
            </TableRow>
          ))}
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>Ret </TableCell>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantParUnité}</CustomTextField>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.LibelléFrais}</CustomTextField>
              <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                <Checkbox defaultChecked={row.checked} />
              </TableCell>
            </TableRow>
          ))}
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>SurC </TableCell>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantParUnité}</CustomTextField>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.LibelléFrais}</CustomTextField>
              <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                <Checkbox defaultChecked={row.checked} />
              </TableCell>
            </TableRow>
          ))}
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>Tim </TableCell>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantParUnité}</CustomTextField>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.LibelléFrais}</CustomTextField>
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

export default FraisDivers
