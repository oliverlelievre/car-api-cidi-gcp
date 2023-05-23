import express from 'express'
import carValueController from '../controllers/carValueController'

const router = express.Router()

router.post('/', carValueController.getCarValue)

export default router
