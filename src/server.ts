import express from 'express';
import carValueRouter from './routes/carValueRouter';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/car-value', carValueRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
