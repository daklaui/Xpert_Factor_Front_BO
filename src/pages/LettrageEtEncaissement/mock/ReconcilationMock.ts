import { DataGridRowTypeReconcilation } from 'src/@fake-db/types'

export const generateFakeDataReconcilation = (count: number): DataGridRowTypeReconcilation[] => {
  const fakeDataReconcilation: DataGridRowTypeReconcilation[] = []

  for (let i = 0; i < count; i++) {
    fakeDataReconcilation.push({
      Ref_Encaissement: `Ref ${i}`,
      Montant_Encaissement: Math.floor(Math.random() * 100000),
      Montant_Lettrage: Math.floor(Math.random() * 100000),
      Date_Valeur: `Date ${i}`,
      Nombre_Factures: Math.floor(Math.random() * 10),
      Adherent: `Adherent ${i}`,
      Acheteur: `Acheteur ${i}`,
      Contract: i + 1 // Assuming Contract is numeric
    })
  }

  console.log('Generated fake data:', fakeDataReconcilation) // Add this line to log the generated fake data
  return fakeDataReconcilation
}

export default generateFakeDataReconcilation
