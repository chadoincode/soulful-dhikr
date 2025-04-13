type Category = {
  name: string
  slug: string
  total: number
}

type CategoryResponse = {
  data: Category[]
}

export type {Category, CategoryResponse}