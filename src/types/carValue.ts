export interface Car {
  id: number
  model: string
  year: number
  value: number
}

export interface carInput {
  model: string
  year: number
}

// Testing Interface

export interface testCarValue {
  model: any
  year: any
  expected: string
}
