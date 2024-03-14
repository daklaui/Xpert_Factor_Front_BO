import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { DataGrid } from '@mui/x-data-grid'
import CardHeader from '@mui/material/CardHeader'
import MockLettrage from '../mock/MockLettrage'

interface SelectedAdherent {
  value: string // Adjust the type according to your actual data structure
}
const TableLettrage = ({ selectedAdherent }: { selectedAdherent?: SelectedAdherent }) => {
  // Get mock data based on selected adherent value
  const rows = selectedAdherent ? MockLettrage[selectedAdherent.value as keyof typeof MockLettrage] : []

  // Define table columns
  const columns = [
    {
      flex: 0.5,
      minWidth: 100,
      field: 'Nom_Acheteur',
      headerName: 'Nom Acheteur'
    },
    {
      flex: 0.2,
      minWidth: 100,
      field: 'Ref_Encaissement',
      headerName: 'Référence Encaissement'
    },
    {
      flex: 0.5,
      minWidth: 100,
      field: 'Montant_Encaissement',
      headerName: 'Montant Encaissment'
    },
    {
      flex: 0.5,
      minWidth: 100,
      field: 'Date_Reception',
      headerName: 'Date Réception'
    },
    {
      flex: 0.5,
      minWidth: 100,
      field: 'Date_Valeur',
      headerName: 'Date Valeur'
    }
  ]

  return <DataGrid columns={columns} rows={rows} />
}

export default TableLettrage
