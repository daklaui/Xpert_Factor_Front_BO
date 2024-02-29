type TableRows = {
    id: number
    RéfDocument: string
    MontantTTC: string
    Devise: string
    Echéance: string
    MontantOuvert: string
  }
export default TableRows

export const getTypeProrog = async () => {
  const mockOptions = [
    { value: ' Achat', label: 'Achat' },
    { value: 'Sond', label: 'Sond' },
    { value: 'P.Dir', label: 'P.Dir' },
    { value: 'Autre', label: 'Autre' },
  ]

  return { optionsTypeProrog: mockOptions }
}

