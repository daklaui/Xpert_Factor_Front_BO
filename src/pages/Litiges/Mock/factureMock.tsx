import TableRows from './tabData'

export const generateFakeData = (count: number): TableRows[] => {
  const fakeData: TableRows[] = []

  for (let i = 0; i < count; i++) {
    fakeData.push({
      id: i + 1,
      RéfFacture: `REF-${Math.floor(Math.random() * 1000000)}`,
      NomAcheteur: generateRandomName(),
      Date: generateRandomDate(),
      Retenu: Math.random() > 0.5 ? 'Oui' : 'Non',
      MontantTTC: getRandomAmount().toString(),
      MontantOuvert: getRandomAmount().toString()
    })
  }
  console.log(fakeData)

  return fakeData
}
function generateRandomName() {
  const names = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Eve',
    'Frank',
    'Grace',
    'Hannah',
    'Ivy',
    'Jack',
    'Katie',
    'Liam',
    'Mia',
    'Noah',
    'Olivia',
    'Peter',
    'Quinn',
    'Rachel',
    'Sam',
    'Taylor',
    'Uma',
    'Victor',
    'Wendy',
    'Xander',
    'Yara',
    'Zane'
  ]
  const randomIndex = Math.floor(Math.random() * names.length)

  return names[randomIndex]
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
