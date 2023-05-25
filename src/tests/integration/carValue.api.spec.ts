import { Server } from 'http'
import app from '../../app'
import request from 'supertest'

describe('test the car value API', () => {
  it('should all car records value', async () => {
    // Arrange
    const expected = [{ id: 1, model: 'Holden', year: 2008, value: 7808 }]

    // Act
    const res = await request(app).get('/api/car-value')

    // Assert
    expect(res.status).toEqual(200)
    expect(res.body).toEqual(expected)
  })
})
