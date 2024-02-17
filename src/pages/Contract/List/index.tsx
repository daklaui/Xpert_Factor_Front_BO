import { Typography } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { DataGridRowType, DataGridRowTypeContract } from 'src/@fake-db/types' // Importing the updated data type
import TableServerSide from 'src/SharedComponents/DataGrid/DataGrid'
import { GridColumns } from 'src/SharedComponents/DataGrid/DataGrid.interface'
import generateFakeData from '../mock/data.mock'

const columns: GridColumns[] = [
  {
    flex: 0.1,
    minWidth: 200,
    field: 'Ref_contrat',
    headerName: 'Référence\nContrat',
    renderCell: params => <Typography variant='body2'>{params.row.Ref_contrat}</Typography>
  },
  {
    flex: 0.2,
    minWidth: 200,
    field: 'Nom_Adherenet',
    headerName: 'Nom\nAdhérent',
    renderCell: params => <Typography variant='body2'>{params.row.Nom_Adherenet}</Typography>
  },
  {
    flex: 0.15,
    minWidth: 200,
    field: 'Encours_des_factures',
    headerName: 'Solde\nFactures',
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
    headerName: 'Total\nFinancement',
    renderCell: params => <Typography variant='body2'>{params.row.Total_Financements}</Typography>
  },
  {
    flex: 0.15,
    minWidth: 200,
    field: 'Total_Encaissement',
    headerName: 'Total\nEncaissement',
    renderCell: params => <Typography variant='body2'>{params.row.Total_Encaissement}</Typography>
  },
  {
    flex: 0.15,
    minWidth: 200,
    field: 'Total_Avoirs',
    headerName: 'Total\nCrédits',
    renderCell: params => <Typography variant='body2'>{params.row.Total_Avoirs}</Typography>
  },
  {
    flex: 0.15,
    minWidth: 200,
    field: 'Total_Intérets',
    headerName: 'Total\nIntérêts',
    renderCell: params => <Typography variant='body2'>{params.row.Total_Intérets}</Typography>
  },
  {
    flex: 0.15,
    minWidth: 200,
    field: 'Limite_De_Financement',
    headerName: 'Limite\nFinancement',
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
    minWidth: 200,
    field: 'Nombre_Dacheteurs_prévues',
    headerName: 'Nombre\nAcheteurs\nPrévues',
    renderCell: params => <Typography variant='body2'>{params.row.Nombre_Dacheteurs_prévues}</Typography>
  },
  {
    flex: 0.15,
    minWidth: 200,
    field: 'Nombre_De_Factures_prévues',
    headerName: 'Nombre\nFactures\nPrévues',
    renderCell: params => <Typography variant='body2'>{params.row.Nombre_De_Factures_prévues}</Typography>
  },
  {
    flex: 0.15,
    minWidth: 200,
    field: 'Nombre_Davoirs_prévues',
    headerName: 'Nombre\nCrédits\nPrévues',
    renderCell: params => <Typography variant='body2'>{params.row.Nombre_Davoirs_prévues}</Typography>
  },
  {
    flex: 0.15,
    minWidth: 200,
    field: 'Nombre_De_remise_prévues',
    headerName: 'Nombre\nRemises\nPrévues',
    renderCell: params => <Typography variant='body2'>{params.row.Nombre_De_remise_prévues}</Typography>
  },
  {
    flex: 0.15,
    minWidth: 200,
    field: 'Délai_moyen_de_réglement',
    headerName: 'Moyen\nRèglement',
    renderCell: params => <Typography variant='body2'>{params.row.Délai_moyen_de_réglement}</Typography>
  },
  {
    flex: 0.15,
    minWidth: 200,
    field: 'Délai_max_de_réglement',
    headerName: 'Max\nRèglement',
    renderCell: params => <Typography variant='body2'>{params.row.Délai_max_de_réglement}</Typography>
  }
]

const ContractList = () => {
  const defaultPageSize = '10'
  const [pageSize, setPageSize] = useState<string>(defaultPageSize)
  const [page, setPage] = useState<number>(0)
  const [rows, setRows] = useState<DataGridRowTypeContract[]>([])
  const fakeData = useMemo(() => generateFakeData(10), [])

  const filteredData = fakeData.map((row, index) => ({
    id: index + 1,
    Ref_contrat: row.Ref_contrat,
    Nom_Adherenet: row.Nom_Adherenet,
    Encours_des_factures: row.Encours_des_factures,
    Total_Factures: row.Total_Factures,
    Total_Financements: row.Total_Financements,
    Total_Encaissement: row.Total_Encaissement,
    Total_Avoirs: row.Total_Avoirs,
    Total_Intérets: row.Total_Intérets,
    Limite_De_Financement: row.Limite_De_Financement,
    Devise: row.Devise,
    Nombre_Dacheteurs_prévues: row.Nombre_Dacheteurs_prévues,
    Nombre_De_Factures_prévues: row.Nombre_De_Factures_prévues,
    Nombre_Davoirs_prévues: row.Nombre_Davoirs_prévues,
    Nombre_De_remise_prévues: row.Nombre_De_remise_prévues,
    Délai_moyen_de_réglement: row.Délai_moyen_de_réglement,
    Délai_max_de_réglement: row.Délai_max_de_réglement
  }))

  const memoizedLoadServerRows = useMemo(
    () => (currentPage: number, pageSize: number, data: DataGridRowTypeContract[]) => {
      return data.slice(currentPage * pageSize, (currentPage + 1) * pageSize)
    },
    [pageSize]
  )

  useEffect(() => {
    const newRows = memoizedLoadServerRows(page, parseInt(pageSize, 10), filteredData)
    setRows(newRows)
  }, [page, pageSize, filteredData, memoizedLoadServerRows])

  const handleRowClick = (row: DataGridRowType | DataGridRowTypeContract) => {
    console.log('Selected Row:', row)
  }

  const onNumberRowPageChange = (numberOfRows: string) => {
    setPageSize(numberOfRows)
    console.log('The current number of Rows is:', numberOfRows)
  }

  return (
    <TableServerSide
      title='Liste des contrats'
      customrows={filteredData}
      onCustomSearch={(value: any) => {
        console.log(value)
      }}
      onNumberRowPageChange={onNumberRowPageChange}
      showCheckboxSelection={false}
      pageSize={pageSize}
      onRowClick={handleRowClick}
      columns={columns}
    />
  )
}

export default ContractList
