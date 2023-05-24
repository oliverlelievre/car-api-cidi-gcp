import express from 'express'
import * as carValueController from '../controllers/carValueController'

const router = express.Router()

router.get('/car-value/', carValueController.getAllCars)

router.post('/car-value/', carValueController.carAdd)

router.get('/car-value/:id', carValueController.getOneCar)

export default router
