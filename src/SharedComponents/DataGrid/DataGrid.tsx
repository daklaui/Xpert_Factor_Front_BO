// ** React Imports
import { useEffect, useState, useCallback, ChangeEvent, useMemo } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid, GridRenderCellParams, GridSortModel } from '@mui/x-data-grid'

// ** ThirdParty Components
import axios from 'axios'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'
import { DataGridRowType, DataGridRowTypeCustomized } from 'src/@fake-db/types'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

import ServerSideToolbar from './ServerSideToolbar'
import statusObj from './mock/status.mock'

import { DataGridCustomProps, GridColumns } from './DataGrid.interface'

type SortType = 'asc' | 'desc' | undefined | null

// ** renders client column
const renderClient = (params: GridRenderCellParams) => {
  const { row } = params
  const stateNum = Math.floor(Math.random() * 6)
  const states = ['success', 'error', 'warning', 'info', 'primary', 'secondary']
  const color = states[stateNum]

  if (row.avatar.length) {
    return <CustomAvatar src={`/images/avatars/${row.avatar}`} sx={{ mr: 3, width: '1.875rem', height: '1.875rem' }} />
  } else {
    return (
      <CustomAvatar
        skin='light'
        color={color as ThemeColor}
        sx={{ mr: 3, fontSize: '.8rem', width: '1.875rem', height: '1.875rem' }}
      >
        {getInitials(row.full_name ? row.full_name : 'John Doe')}
      </CustomAvatar>
    )
  }
}

const TableServerSide = ({
  onCustomSearch,
  title,
  columns,
  customrows,
  showCheckboxSelection,
  onNumberRowPageChange,
  pageSize
}: DataGridCustomProps & { pageSize: string }) => {
  const [page, setPage] = useState<number>(0)
  const [total, setTotal] = useState<number>(customrows.length)
  const [currentPageSize, setCurrentPageSize] = useState<string>(pageSize)
  const [rows, setRows] = useState<DataGridRowTypeCustomized[]>([])
  const [searchValue, setSearchValue] = useState<string>('')
  const [sortColumn, setSortColumn] = useState<string>('full_name')

  const [sort, setSort] = useState<SortType>('asc')

  // const memoizedLoadServerRows = useMemo(
  //   () => (currentPage: number, pageSize: number, data: DataGridRowTypeCustomized[]) => {
  //     return data.slice(currentPage * pageSize, (currentPage + 1) * pageSize)
  //   },
  //   []
  // )

  // const handleSearch = (value: string) => {
  //   setSearchValue(value)
  //   onCustomSearch ? onCustomSearch(value) : fetchTableData(sort, value, sortColumn)
  // }

  const handleRowClick = (row: DataGridRowType) => {
    console.log('Selected Row:', row)
  }

  const handlePageSizeChange = (newPageSize: number) => {
    setCurrentPageSize(newPageSize.toString()) // Update current page size
    onNumberRowPageChange && onNumberRowPageChange(newPageSize.toString())
  }
  // useEffect(() => {
  //   const newRows = memoizedLoadServerRows(page, parseInt(pageSize, 10), customrows)
  //   setRows(newRows)
  // }, [page, pageSize, customrows, memoizedLoadServerRows])
  return (
    <Card>
      <CardHeader title={title} />
      <DataGrid
        autoHeight
        pagination
        rows={customrows}
        rowCount={total}
        columns={columns}
        checkboxSelection={showCheckboxSelection}
        pageSize={parseInt(pageSize, 10)}
        sortingMode='server'
        paginationMode='server'
        // onSortModelChange={handleSortModel}
        rowsPerPageOptions={[7, 10, 25, 50]}
        onPageChange={(newPage: number) => setPage(newPage)}
        components={{
          Toolbar: props => (
            <ServerSideToolbar
              {...props}
              onNumberRowPageChange={(numberOfRows: string) => {
                onNumberRowPageChange && onNumberRowPageChange(numberOfRows)
              }}
            />
          )
        }}
        onPageSizeChange={handlePageSizeChange}
        onRowClick={params => handleRowClick(params.row as DataGridRowType)}
        componentsProps={{
          baseButton: {
            variant: 'outlined'
          },
          toolbar: {
            value: searchValue
            // clearSearch: () => handleSearch(''),
            // onChange: (event: ChangeEvent<HTMLInputElement>) => handleSearch(event.target.value)
          }
        }}
      />
    </Card>
  )
}

export default TableServerSide
