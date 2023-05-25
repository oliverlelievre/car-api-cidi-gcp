import { calculateValue } from '../logic/logic'
import { Car, carInput } from '../types/carValue'

let allCars: Car[] = [{ id: 1, model: 'Holden', year: 2008, value: 7808 }]

export const getAllCars = () => {
  return allCars
}

export const carAdd = (input: carInput) => {
  const newInput = {
    id: allCars.length + 1,
    model: input.model,
    year: input.year,
    value: calculateValue(input.model, input.year),
  }
  allCars.push(newInput)
  return newInput
}

export const getCarId = (carID: number) => {
  const matchedRecord = allCars.find((t) => t.id === carID)
  if (!matchedRecord) {
    throw 'That car does not exist on our database.'
  }
  return matchedRecord
}
