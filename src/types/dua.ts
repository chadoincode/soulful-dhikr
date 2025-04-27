type Dua = {
  id: number
  title: string
  arabic: string
  translation: string
  category: string
  fawaid: string | null
  notes: string | null
  source: string
}

type Duas = {
  DuaList: Dua[]
}

export type {Dua, Duas}