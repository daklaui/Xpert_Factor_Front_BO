export const getJuridique = async () => {
  const mockOptions = [
    { value: 'Société à responsabilité limitée', label: 'Société à responsabilité limitée' },
    { value: 'Société anonyme', label: 'Société anonyme' },
    {
      value: 'Société unipersonnelle à responsabilité limitée',
      label: 'Société unipersonnelle à responsabilité limitée'
    },
    { value: 'Société en nom collectif', label: 'Société en nom collectif' },
    { value: 'Société en commandite simple', label: 'Société en commandite simple' },
    { value: 'Société en participation', label: 'Société en participation' }
  ]

  return { optionsJuridique: mockOptions }
}

export const getActivite = async () => {
  const mockOptions = [
    { value: 'ACTIVITE INCONNUE', label: 'ACTIVITE INCONNUE' },
    { value: 'Culture de fourrages', label: 'Culture de fourrages' },
    { value: 'Culture de céréales', label: 'Culture de céréales' },
    {
      value: 'Culture de légumineuses et cultures industrielles',
      label: 'Culture de légumineuses et cultures industrielles'
    },
    { value: "Culture d'agrumes et vergers", label: "Culture d'agrumes et vergers" }
  ]

  return { optionsActivite: mockOptions }
}

export const getGroupeSociete = async () => {
  const mockOptions = [
    { value: 'Poulina', label: 'Poulina' },
    { value: 'Test', label: 'Test' },
    { value: 'Ajouter groupe', label: 'Ajouter groupe' }
  ]

  return { optionsGroupeSociete: mockOptions }
}

export const getVille = async () => {
  const mockOptions = [
    { value: 'PONT DE BIZERTE | 2061', label: 'PONT DE BIZERTE | 2061' },
    { value: 'CHORFECH | 2057', label: 'CHORFECH | 2057' },
    { value: 'TUNIS CARTHAGE | 2035', label: 'TUNIS CARTHAGE | 2035' },
    { value: 'SIDI THABET | 2020', label: 'SIDI THABET | 2020' },
    { value: 'RAOUED | 2056', label: 'RAOUED | 2056' },
    { value: 'EL MENZAH 6 | 2091', label: 'EL MENZAH 6 | 2091' }
  ]

  return { optionsVille: mockOptions }
}

export const getNationalite = async () => {
  const mockOptions = [
    { value: 'Tunisienne', label: 'Tunisienne' },
    { value: 'Française', label: 'Française' },
    { value: 'Canadienne', label: 'Canadienne' }
  ]

  return { optionsNationalite: mockOptions }
}

export const getLangue = async () => {
  const mockOptions = [
    { value: 'Anglais ', label: 'Anglais' },
    { value: 'Français', label: 'Français' },
    { value: 'Espagnol', label: 'Espagnol' },
    { value: 'Italienne', label: 'Italienne' },
    { value: 'Arabe', label: 'Arabe' }
  ]

  return { optionsLangue: mockOptions }
}
