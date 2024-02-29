import TableRows from './tabData'

export const generateFakeData = (count: number): TableRows[] => {
  const fakeData: TableRows[] = []

  for (let i = 0; i < count; i++) {
    fakeData.push({
      id: i + 1,
      RéfFacture: `REF-${Math.floor(Math.random() * 1000000)}`,
      NomAcheteur: getAcheteurList().toString(),
      Date: generateRandomDate(),
      Retenu: Math.random() > 0.5 ? 'Oui' : 'Non',
      MontantTTC: getRandomAmount().toString(),
      MontantOuvert: getRandomAmount().toString()
    })
  }
  console.log(fakeData)

  return fakeData
}
function getAcheteurList() {
  const mockOptions = [
    { value: 'option1', label: 'XF1' },
    { value: 'option2', label: 'XF2' },
    { value: 'option3', label: 'XF3' },
    { value: 'option4', label: 'XF4' },
    { value: 'option5', label: 'XF5' },
    { value: 'option6', label: 'XF6' },
    { value: 'option7', label: 'XF7' },
    { value: 'option8', label: 'XF8' }
  ]

  return { options: mockOptions }
}

function generateRandomDate() {
  const startDate = new Date('1970-01-01').getTime()
  const endDate = new Date().getTime()
  const randomTime = startDate + Math.random() * (endDate - startDate)

  return new Date(randomTime).toDateString()
}

function getRandomAmount() {
  return Math.random() * 100 // Generates a random amount between 0 and 100
}
