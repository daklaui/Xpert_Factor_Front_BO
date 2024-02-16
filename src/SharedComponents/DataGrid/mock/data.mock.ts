import { DataGridRowType } from 'src/@fake-db/types'

export const generateFakeData = (count: number): DataGridRowType[] => {
  const fakeData: DataGridRowType[] = []

  for (let i = 0; i < count; i++) {
    fakeData.push({
      full_name: `John Doe ${i}`,
      start_date: '2023-01-01',
      salary: 50000,
      age: String(Math.floor(Math.random() * 100)),
      status: Math.floor(Math.random() * 5),
      id: i + 1,
      post: 'Engineer',
      city: 'New York',
      email: `john${i}@example.com`,
      avatar: `john_avatar_${i}.jpg`,
      experience: '5 years'
    })
  }

  return fakeData
}

export default generateFakeData
