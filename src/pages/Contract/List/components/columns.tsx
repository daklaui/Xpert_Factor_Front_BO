import { Typography } from '@mui/material'
import { GridRenderCellParams } from '@mui/x-data-grid'
import { GridColumns } from 'src/shared-components/data-grid/interface/dataGrid.interface'
export const columns: GridColumns[] = [
  {
    flex: 0.1,
    minWidth: 200,
    field: 'Ref_contrat',
    headerName: 'Référence Contrat',
    renderCell: params => <Typography variant='body2'>{params.row.Ref_contrat}</Typography>
  },
  {
    flex: 0.2,
    minWidth: 200,
    field: 'Nom_Adherenet',
    headerName: 'Nom Adhérent',
    renderCell: params => <Typography variant='body2'>{params.row.Nom_Adherenet}</Typography>
  },
  {
    flex: 0.15,
    minWidth: 200,
    field: 'Encours_des_factures',
    headerName: 'Solde Factures',
    renderCell: params => <Typography variant='body2'>{params.row.Encours_des_factures}</Typography>
  },
  {
    flex: 0.15,
    minWidth: 200,
    field: 'Total_Factures',
    headerName: 'Total Factures',
    renderCell: params => <Typography variant='body2'>{params.row.Total_Factures}</Typography>
  },
  {
    flex: 0.15,
    minWidth: 200,
    field: 'Total_Financements',
    headerName: 'Total Financement',
    renderCell: params => <Typography variant='body2'>{params.row.Total_Financements}</Typography>
  },
  {
    flex: 0.15,
    minWidth: 200,
    field: 'Total_Encaissement',
    headerName: 'Total Encaissement',
    renderCell: params => <Typography variant='body2'>{params.row.Total_Encaissement}</Typography>
  },
  {
    flex: 0.15,
    minWidth: 200,
    field: 'Total_Avoirs',
    headerName: 'Total Crédits',
    renderCell: params => <Typography variant='body2'>{params.row.Total_Avoirs}</Typography>
  },
  {
    flex: 0.15,
    minWidth: 200,
    field: 'Total_Intérets',
    headerName: 'Total Intérêts',
    renderCell: params => <Typography variant='body2'>{params.row.Total_Intérets}</Typography>
  },
  {
    flex: 0.15,
    minWidth: 200,
    field: 'Limite_De_Financement',
    headerName: 'Limite Financement',
    renderCell: params => <Typography variant='body2'>{params.row.Limite_De_Financement}</Typography>
  },
  {
    flex: 0.1,
    minWidth: 200,
    field: 'Devise',
    headerName: 'Devise',
    renderCell: params => <Typography variant='body2'>{params.row.Devise}</Typography>
  },
  {
    flex: 0.15,
    minWidth: 250,
    field: 'Nombre_Dacheteurs_prévues',
    headerName: 'Nombre Acheteurs Prévues',
    renderCell: params => <Typography variant='body2'>{params.row.Nombre_Dacheteurs_prévues}</Typography>
  },
  {
    flex: 0.15,
    minWidth: 250,
    field: 'Nombre_De_Factures_prévues',
    headerName: 'Nombre Factures Prévues',
    renderCell: params => <Typography variant='body2'>{params.row.Nombre_De_Factures_prévues}</Typography>
  },
  {
    flex: 0.15,
    minWidth: 250,
    field: 'Nombre_Davoirs_prévues',
    headerName: 'Nombre Crédits Prévues',
    renderCell: params => <Typography variant='body2'>{params.row.Nombre_Davoirs_prévues}</Typography>
  },
  {
    flex: 0.15,
    minWidth: 250,
    field: 'Nombre_De_remise_prévues',
    headerName: 'Nombre Remises Prévues',
    renderCell: params => <Typography variant='body2'>{params.row.Nombre_De_remise_prévues}</Typography>
  },
  {
    flex: 0.15,
    minWidth: 200,
    field: 'Délai_moyen_de_réglement',
    headerName: 'Moyen Règlement',
    renderCell: params => <Typography variant='body2'>{params.row.Délai_moyen_de_réglement}</Typography>
  },
  {
    flex: 0.15,
    minWidth: 200,
    field: 'Délai_max_de_réglement',
    headerName: 'Max Règlement',
    renderCell: params => <Typography variant='body2'>{params.row.Délai_max_de_réglement}</Typography>
  }
]
