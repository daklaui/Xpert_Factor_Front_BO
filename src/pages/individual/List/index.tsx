import TableServerSide from 'src/SharedComponents/DataGrid/DataGrid'

const IndividualList = () => {
  return <TableServerSide  onCustomSearch={
    (value : any) => {
console.log(value)
    }
  } />
}

export default IndividualList
