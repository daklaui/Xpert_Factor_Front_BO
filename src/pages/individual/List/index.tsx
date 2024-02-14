import SelectAdherent from "src/SharedComponents/SelectAdherentComponent";
import SelectBanque from "src/SharedComponents/SelectBanqueComponent";
import SelectDevise from "src/SharedComponents/SelectDeviseComponent";
import SelectIndividu from "src/SharedComponents/SelectIndividualComponent";
import SelectModePaiement from "src/SharedComponents/SelectModePaimentComponent";

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
