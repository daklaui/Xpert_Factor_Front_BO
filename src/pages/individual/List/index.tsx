<<<<<<< HEAD
import SelectAdherent from "src/SharedComponents/CustomSelect/SelectAdherentComponent";
import SelectBanque from "src/SharedComponents/CustomSelect/SelectBanqueComponent";
import SelectDevise from "src/SharedComponents/CustomSelect/SelectDeviseComponent";
import SelectIndividu from "src/SharedComponents/CustomSelect/SelectIndividualComponent";
import SelectModePaiement from "src/SharedComponents/CustomSelect/SelectModePaimentComponent";

const IndividualList = () => {
<<<<<<< HEAD
  return <>

    <SelectIndividu onSearch={
      (value: any) => {
        console.log(value);
      }
    } labelText='Individu' />

   < SelectAdherent onSearch={
      (value: any) => {
        console.log(value);
      }
    } labelText='Adherent' />


    <SelectDevise onSearch={
      (value: any) => {
        console.log(value);
      }
    } labelText='Devise'/>


    <SelectBanque  onSearch={
      (value: any) => {
        console.log(value);
      }
    } labelText='Banque'/>


    <SelectModePaiement  onSearch={
      (value: any) => {
        console.log(value);
      }
    } labelText='Paiement'/>

  </>
=======
// import TableServerSide from 'src/SharedComponents/DataGrid/DataGrid'

const IndividualList = () => {
  // return <TableServerSide />
>>>>>>> 3a8ffd3 (data_grid_first_commit)
=======
  const handleRowClick = (row: DataGridRowType) => {
    console.log('Selected Row:', row)
  }

  const onNumberRowPageChange = (numberOfRows: string) => {
    console.log('The current number of Rows is:', numberOfRows)
  }

  const fakeData = generateFakeData(20)
  //console.log(fakeData)
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

  // console.log(filteredData.map(row => ({ start_date: row.start_date })))

  return (
    <TableServerSide
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
>>>>>>> c830199 (push rows per page)
}

export default IndividualList
