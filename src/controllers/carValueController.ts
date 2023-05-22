import { Request, Response } from 'express';
import carValueService from '../services/carValueService';

const carValueController = {
  getCarValue(req: Request, res: Response) {
    const { model, year } = req.body;
    const carValue = carValueService.calculateCarValue(model, year);

    // if (carValue === null) {
    //   res.status(400).json({ error: 'Invalid input values' });
    // } else {
    res.json({ car_value: carValue });
    //  }
  },
};

export default carValueController;
