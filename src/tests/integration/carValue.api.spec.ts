import { Server } from 'http';
import app from '../../app';
import request from 'supertest';

describe('tasks api', () => {
  test('it should return the calculated car value', async () => {
    // Arrange
    const expected = {
      car_value: 6620,
    };

    // Act
    const res = await request(app).post('/car-value').send({
      model: 'Civic',
      year: 2020,
    });

    // Assert
    expect(res.status).toEqual(200);
    expect(res.body).toEqual(expected);
  });
});
