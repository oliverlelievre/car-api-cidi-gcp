import * as carValueController from '../../controllers/carValueController'
import { createRequest, createResponse } from 'node-mocks-http'

describe('addCar', () => {
  test('should add a new car record', () => {
    // Arrange
    const req = createRequest()
    const res = createResponse()
    const expected = { id: 2, model: 'Holden', year: 2008, value: 7808 }

    // Act
    req.body.model = 'Holden'
    req.body.year = 2008
    carValueController.carAdd(req, res)

    //Assert
    expect(res.statusCode).toBe(200)
    expect(res.json()._getData()).toEqual(expected)
  })
})