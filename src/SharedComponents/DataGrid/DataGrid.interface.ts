import { GridRenderCellParams } from '@mui/x-data-grid'
import { ThemeColor } from 'src/@core/layouts/types'
import { DataGridRowType, DataGridRowTypeContract, DataGridRowTypeCustomized } from 'src/@fake-db/types'
export interface StatusObj {
  [key: number]: {
    title: string
    color: ThemeColor
  }
}

export interface GridColumns {
  flex: number
  minWidth: number
  field: string
  headerName: string
  renderCell?: (params: GridRenderCellParams) => React.ReactNode
}

export type SortType = 'asc' | 'desc'

export interface FetchTableDataProps {
  page: number
  total: number
  sort: SortType
  pageSize: number 
  rows: number
  searchValue: string
  sortColumn: string
  setTotal: () => void
  setRows: () => void
}

export interface DataGridCustomProps {
  title: string
  customrows: DataGridRowTypeCustomized[] | DataGridRowTypeContract[]
  onCustomSearch: (value: string) => void
  showCheckboxSelection: boolean
  onRowClick: (row: DataGridRowType | DataGridRowTypeContract) => void
  onNumberRowPageChange: (value: string) => void
  columns: GridColumns[]
  pageSize: string
}
