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

  const onNumberOfRowsChange = (numberOfRows: string) => {
    console.log('the current number of Rows is:', numberOfRows)
    setPageSize(numberOfRows)
  }

  return (
    <TableServerSide
      onCustomSearch={(value: any) => {
        console.log(value)
      }}
      onNumberRowPageChange={onNumberOfRowsChange}
      showCheckboxSelection={false}
      pageSize={pageSize}
      onRowClick={handleRowClick}
    />
  )
>>>>>>> c830199 (push rows per page)
}

export default IndividualList
