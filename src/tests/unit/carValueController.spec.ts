// import { Request, Response } from 'express';
import { createRequest, createResponse } from 'node-mocks-http';
import carValueController from '../../controllers/carValueController';
import carValueService from '../../services/carValueService';

describe('Car Value Controller', () => {
  describe('GET /car-value', () => {
    it('should return car value for valid input', () => {
      // Mock request and response objects
      const req = createRequest();
      const res = createResponse();

      // Set request body with valid input values
      req.body = {
        model: 'Toyota Camry',
        year: 2020,
      };

      // Mock the calculateCarValue method of the carValueService
      jest.spyOn(carValueService, 'calculateCarValue').mockReturnValue(50000);

      // Call the controller method
      carValueController.getCarValue(req, res);

      // Verify the response
      expect(res.statusCode).toBe(200);
      expect(res._getJSONData()).toEqual({ car_value: 50000 });
    });

    it('should return error for invalid input', () => {
      // Mock request and response objects
      const req = createRequest();
      const res = createResponse();

      // Set request body with invalid input values
      req.body = {
        model: 'Invalid Model',
        year: 2022,
      };

      // Mock the calculateCarValue method of the carValueService
      jest.spyOn(carValueService, 'calculateCarValue').mockReturnValue(null);

      // Call the controller method
      carValueController.getCarValue(req, res);

      // Verify the response
      expect(res.statusCode).toBe(400);
      expect(res._getJSONData()).toEqual({ error: 'Invalid input values' });
    });
  });
});
