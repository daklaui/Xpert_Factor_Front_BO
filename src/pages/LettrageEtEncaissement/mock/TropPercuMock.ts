import { DataGridRowTypePercu } from 'src/@fake-db/types'

export const generateFakeData = (count: number): DataGridRowTypePercu[] => {
  const fakeData: DataGridRowTypePercu[] = []

  for (let i = 0; i < count; i++) {
    fakeData.push({
      Contrat: i + 1,
      Nom_Adherent: `Adherent ${i}`,
      Nom_Acheteur: `Acheteur ${i}`,
      Ref_Encaissement: `Ref ${i}`,
      Mnt_du_lettrage: Math.floor(Math.random() * 100000),
      Trop_Percu: Math.floor(Math.random() * 100000)
    })
  }

  console.log('Generated fake data:', fakeData) // Add this line to log the generated fake data
  return fakeData
}
export default generateFakeData
