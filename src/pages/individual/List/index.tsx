import { DataGridRowType } from 'src/@fake-db/types'
import TableServerSide from 'src/SharedComponents/DataGrid/DataGrid'

const IndividualList = () => {
  const handleRowClick = (row: DataGridRowType) => {
    console.log('Selected Row:', row)
  }
  
  return (
    <TableServerSide
      onCustomSearch={(value: any) => {
        console.log(value)
      }}
      showCheckboxSelection={false}
      onRowClick={handleRowClick}
    />
  )
}

export default IndividualList
