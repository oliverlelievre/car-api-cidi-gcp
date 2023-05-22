import express from 'express'
import carValueRouter from './routes/carValueRouter'

const app = express()
app.use(express.json())

app.use('/car-value', carValueRouter)

export default app
