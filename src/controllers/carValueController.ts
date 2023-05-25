import { Request, Response } from 'express'
import * as carValueService from '../services/carValueService'

export const getAllCars = (req: Request, res: Response) => {
  const carRecord = carValueService.getAllCars()
  res.send(carRecord)
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

export const getCarId = (req: Request, res: Response) => {
  const carID = parseInt(req.params.id)

  try {
    const response = carValueService.getCarId(carID)
    res.send(response)
  } catch (e) {
    res.status(404).send(e)
  }
}