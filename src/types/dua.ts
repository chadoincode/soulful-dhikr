type DuaResponse = {
  data: Dua[]
}

type Dua = {
  id: number
  title: string
  arabic: string
  translation: string
  source: string
}

export type {Dua, DuaResponse}