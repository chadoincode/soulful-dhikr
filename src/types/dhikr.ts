type DhikrResponse = {
  data: Dhikr[]
}

type Dhikr = {
  id: number
  title: string
  arabic: string
  translation: string
  fawaid: string
  source: string 
}

export type {Dhikr, DhikrResponse}