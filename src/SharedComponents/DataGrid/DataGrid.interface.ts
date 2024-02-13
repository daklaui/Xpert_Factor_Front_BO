import { ThemeColor } from "src/@core/layouts/types"

export interface StatusObj {
  [key: number]: {
    title: string
    color: ThemeColor
  }
}

export interface GridColumns {
  flex : any
}

export type SortType = 'asc' | 'desc'
