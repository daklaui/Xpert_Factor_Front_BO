import { DataGridRowTypeImpaye } from 'src/@fake-db/types'

export const generateFakeData = (count: number): DataGridRowTypeImpaye[] => {
  const fakeData: DataGridRowTypeImpaye[] = []

  for (let i = 0; i < count; i++) {
    fakeData.push({
      Encaiss: Math.floor(Math.random() * 100000),
      Nom_Adherenet: `Adherent ${i}`,
      Etab_payeur: Math.floor(Math.random() * 100000),
      Montant: Math.floor(Math.random() * 100000),
      Type: 'T',
      Date_Impaye: 'test',
      Date_saisie: 'test'
    })
  }

  return fakeData
}

export default generateFakeData
