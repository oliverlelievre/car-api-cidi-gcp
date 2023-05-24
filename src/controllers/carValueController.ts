import { Request, Response } from 'express'
import * as carValueService from '../services/carValueService'

export const getAllCars = (req: Request, res: Response) => {
  const carRecords = carValueService.getAllCars()
  res.send(carRecords)
}

export const carAdd = (req: Request, res: Response) => {
  try {
    const model = req.body.model
    const year = req.body.year
    const input = {
      model: model,
      year: year,
    }
    const newInput = carValueService.carAdd(input)
    res.send(newInput)
  } catch (e) {
    res.status(404).send(e)
  }
}

export const getOneCar = (req: Request, res: Response) => {
  const carID = parseInt(req.params.id)

  try {
    const response = carValueService.getOneCar(carID)
    res.send(response)
  } catch (e) {
    res.status(404).send(e)
  }
}