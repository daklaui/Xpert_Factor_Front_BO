import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { DataGrid } from '@mui/x-data-grid'
import CardHeader from '@mui/material/CardHeader'
import mockData from '../mock/MockAdherent'

interface SelectedAdherent {
  value: string // Adjust the type according to your actual data structure
}
const TableBasic = ({ selectedAdherent }: { selectedAdherent?: SelectedAdherent }) => {
  // Get mock data based on selected adherent value
  const rows = selectedAdherent ? mockData[selectedAdherent.value as keyof typeof mockData] : []

  // Define table columns
  const columns = [
    {
      flex: 0.1,
      field: 'Nom_Acheteur',
      minWidth: 100,
      headerName: 'Nom Acheteur'
    },
    {
      flex: 0.25,
      minWidth: 100,
      field: 'Role',
      headerName: 'Role'
    },
    {
      flex: 0.25,
      minWidth: 100,
      field: 'Ref_Contrat',
      headerName: 'Ref Contrat'
    },
    {
      flex: 0.15,
      minWidth: 100,
      field: 'Ref_Adherent',
      headerName: 'Ref Adherent'
    },
    {
      flex: 0.15,
      minWidth: 100,
      field: 'Ref_Acheteur',
      headerName: 'Ref Acheteur'
    }
  ]

  return <DataGrid columns={columns} rows={rows} />
}

export default TableBasic
