interface PaginationOptions {
  currentPage: number
  pageSize: number
}
interface Result {
  currentPageItems: any[]
  totalPages: number
}

export function paginate<T>(array: T[], options: PaginationOptions): Result {
  const { currentPage, pageSize } = options

  // Calculate start and end index for pagination
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize

  // Slice the array to get the current page's items
  const currentPageItems = array.slice(startIndex, endIndex)

  // Calculate the total number of pages
  const totalPages = Math.ceil(array.length / pageSize)

  return {
    currentPageItems,
    totalPages
  }
}
