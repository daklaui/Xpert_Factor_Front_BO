interface SortOptions<T> {
  key: string
  order: 'asc' | 'desc'
}

export function customSort<T>(array: T[], options: SortOptions<T>): T[] {
  const { key, order } = options

  return array.slice().sort((a: any, b: any) => {
    let aValue = a[key]
    let bValue = b[key]

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      aValue = aValue.toLowerCase()
      bValue = bValue.toLowerCase()
    }

    if (order === 'asc') {
      if (aValue < bValue) return -1
      if (aValue > bValue) return 1

      return 0
    } else {
      if (aValue > bValue) return -1
      if (aValue < bValue) return 1

      return 0
    }
  })
}
