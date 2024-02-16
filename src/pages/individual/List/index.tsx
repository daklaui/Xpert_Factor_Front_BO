import { Typography } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { DataGridRowType, DataGridRowTypeCustomized } from 'src/@fake-db/types'
import CustomDataGrid from 'src/SharedComponents/DataGrid/DataGrid'
import { DataGridSortObject, GridColumns } from 'src/SharedComponents/DataGrid/DataGrid.interface'
import generateFakeData from 'src/SharedComponents/DataGrid/mock/data.mock'

const columns: GridColumns[] = [
  {
    flex: 0.25,
    minWidth: 290,
    field: 'full_name',
    headerName: 'Name',
    renderCell: params => <Typography variant='body2'>{params.row.full_name}</Typography>
  },
  {
    flex: 0.175,
    minWidth: 120,
    field: 'start_date',
    headerName: 'Start Date',
    renderCell: params => <Typography variant='body2'>{params.row.start_date}</Typography>
  },
  {
    flex: 0.175,
    minWidth: 110,
    field: 'salary',
    headerName: 'Salary',
    renderCell: params => (
      <Typography variant='body2'>
        {params.row.salary.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </Typography>
    )
  },
  {
    flex: 0.125,
    minWidth: 110,
    field: 'age',
    headerName: 'Age',
    renderCell: params => <Typography variant='body2'>{params.row.age}</Typography>
  }
]

const IndividualList = () => {
  const defaultPageSize = '10'
  const [pageSize, setPageSize] = useState<string>(defaultPageSize)
  const [page, setPage] = useState<number>(0)
  const [rows, setRows] = useState<DataGridRowTypeCustomized[]>([])

  const fakeData = useMemo(() => generateFakeData(60), [])

  const filteredData = fakeData.map(row => ({
    id: row.id,
    full_name: row.full_name,
    start_date: row.start_date,
    salary: row.salary,
    age: row.age
  }))

  const memoizedLoadServerRows = useMemo(
    () => (currentPage: number, pageSize: number, data: DataGridRowTypeCustomized[]) => {
      return data.slice(currentPage * pageSize, (currentPage + 1) * pageSize)
    },
    [pageSize]
  )

  useEffect(() => {
    const newRows = memoizedLoadServerRows(page, parseInt(pageSize, 10), filteredData)
    setRows(newRows)
  }, [page, pageSize, filteredData, memoizedLoadServerRows])

  const handleRowClick = (row: DataGridRowType) => {
    console.log('Selected Row:', row)
  }

  const onNumberRowPageChange = (numberOfRows: string) => {
    setPageSize(numberOfRows)
    console.log('The current number of Rows is:', numberOfRows)
  }

  return (
    <CustomDataGrid
      data={filteredData}
      onCustomSearch={(value: any) => {
        console.log(value)
      }}
      onNumberRowPageChange={onNumberRowPageChange}
      showCheckboxSelection={false}
      pageSize={pageSize}
      onRowClick={handleRowClick}
      columns={columns}
      onCustomSort={function (value: DataGridSortObject): void {
        console.log('not implemented ', value.sort)
      }}
    />
  )
}

export default IndividualList
