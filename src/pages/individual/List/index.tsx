import SelectAdherent from "src/SharedComponents/CustomSelect/SelectAdherentComponent";
import SelectBanque from "src/SharedComponents/CustomSelect/SelectBanqueComponent";
import SelectDevise from "src/SharedComponents/CustomSelect/SelectDeviseComponent";
import SelectIndividu from "src/SharedComponents/CustomSelect/SelectIndividualComponent";
import SelectModePaiement from "src/SharedComponents/CustomSelect/SelectModePaimentComponent";

const IndividualList = () => {
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
}

export default IndividualList
