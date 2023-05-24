import { calculateValue } from '../logic/logic'
import { Car, carInput } from '../types/carValue'

let carRecords: Car[] = [{ id: 1, model: 'Civic', year: 2014, value: 6614 }]

export const getAllCars = () => {
  return carRecords
}

export const carAdd = (input: carInput) => {
  const newInput = {
    id: carRecords.length + 1,
    model: input.model,
    year: input.year,
    value: calculateValue(input.model, input.year),
  }
  carRecords.push(newInput)
  return newInput
}

export const getOneCar = (carID: number) => {
  const matchedRecord = carRecords.find((t) => t.id === carID)
  if (!matchedRecord) {
    throw 'No record found.'
  }
  return matchedRecord
}
