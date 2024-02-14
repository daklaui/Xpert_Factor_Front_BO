import { DataGridRowType } from 'src/@fake-db/types'
import TableServerSide from 'src/SharedComponents/DataGrid/DataGrid'

const IndividualList = () => {
  const handleRowClick = (row: DataGridRowType) => {
    console.log('Selected Row:', row)
  }

  const onNumberOfRowsChange = (numberOfRows: string) => {
    console.log('the current number of Rows is:', numberOfRows)
  }

  return (
    <TableServerSide
      onCustomSearch={(value: any) => {
        console.log(value)
      }}
      onNumberRowPageChange={onNumberOfRowsChange}
      showCheckboxSelection={false}
      onRowClick={handleRowClick}
    />
  )
}

export default IndividualList
