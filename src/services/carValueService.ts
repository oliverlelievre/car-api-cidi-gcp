import { calculateValue } from '../logic/logic'
import { Car, carInput } from '../types/carValue'

let carRecord: Car[] = [{ id: 1, model: 'Civic', year: 2014, value: 6614 }]

export const getAllCars = () => {
  return carRecord
}

export const carAdd = (input: carInput) => {
  const newInput = {
    id: carRecord.length + 1,
    model: input.model,
    year: input.year,
    value: calculateValue(input.model, input.year),
  }
  carRecord.push(newInput)
  return newInput
}

export const getCarId = (carID: number) => {
  const matchedRecord = carRecord.find((t) => t.id === carID)
  if (!matchedRecord) {
    throw 'That car does not exist on our database.'
  }
  return matchedRecord
}
