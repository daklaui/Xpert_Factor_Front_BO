import { DataGridRowTypeContract } from 'src/@fake-db/types'

export const generateFakeData = (count: number): DataGridRowTypeContract[] => {
  const fakeData: DataGridRowTypeContract[] = []

  for (let i = 0; i < count; i++) {
    fakeData.push({
      Ref_contrat: i + 1,
      Nom_Adherenet: `Adherent ${i}`,
      Encours_des_factures: Math.floor(Math.random() * 100000),
      Total_Factures: Math.floor(Math.random() * 100000),
      Total_Financements: Math.floor(Math.random() * 100000),
      Total_Encaissement: Math.floor(Math.random() * 100000),
      Total_Avoirs: Math.floor(Math.random() * 100000),
      Total_Intérets: Math.floor(Math.random() * 100000),
      Limite_De_Financement: Math.floor(Math.random() * 100000),
      Devise: 'TND', // Or any other currency
      Nombre_Dacheteurs_prévues: Math.floor(Math.random() * 100),
      Nombre_De_Factures_prévues: Math.floor(Math.random() * 100),
      Nombre_Davoirs_prévues: Math.floor(Math.random() * 100),
      Nombre_De_remise_prévues: Math.floor(Math.random() * 100),
      Délai_moyen_de_réglement: Math.floor(Math.random() * 30), // Assuming days
      Délai_max_de_réglement: Math.floor(Math.random() * 60) // Assuming days
    })
  }

  return fakeData
}

export default generateFakeData
