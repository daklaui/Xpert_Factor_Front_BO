import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { DataGrid } from '@mui/x-data-grid'
import CardHeader from '@mui/material/CardHeader'
import mockData from '../mock/MockAdherent'

const TableBasic = ({ selectedAdherent }) => {
  // Get mock data based on selected adherent value
  const rows = selectedAdherent ? mockData[selectedAdherent.value] : []

  // Define table columns
  const columns = [
    {
      flex: 0.1,
      field: 'Nom_Acheteur',
      minWidth: 80,
      headerName: 'Nom Acheteur'
    },
    {
      flex: 0.25,
      minWidth: 200,
      field: 'Role',
      headerName: 'Role'
    },
    {
      flex: 0.25,
      minWidth: 230,
      field: 'Ref_Contrat',
      headerName: 'Ref Contrat'
    },
    {
      flex: 0.15,
      minWidth: 130,
      field: 'Ref_Adherent',
      headerName: 'Ref Adherent'
    },
    {
      flex: 0.15,
      minWidth: 120,
      field: 'Ref_Acheteur',
      headerName: 'Ref Acheteur'
    }
  ]

  return (
    <Card>
      <Box sx={{ height: 500 }}>
        <DataGrid columns={columns} rows={rows} />
      </Box>
    </Card>
  )
}

export default TableBasic
