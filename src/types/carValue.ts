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

export interface testModelYear {
  model: any
  year: any
  expected: string
}
