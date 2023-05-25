import * as carValueService from '../../services/carValueService';
import { testCarValue, carInput } from '../../types/carValue'


// cars api to return default car record

describe('Testing carValueService.getAllCars()', () => {
  test('should return 1 record of car', () => {
    //Arrange
    const expected = [{ id: 1, model: 'Civic', year: 2014, value: 6614 }]

    //Act
    const actual = carValueService.getAllCars()

    //Assert
    expect(actual).toEqual(expected)
  })
})

// carAdd to return new car record

describe('Testing carValueService.carAdd()', () => {
  test('should add a new record of car', () => {
    const input = {
      id: 2,
      model: 'Civic',
      year: 2014,
      value: 6614,
    }
    const expected = { id: 2, model: 'Civic', year: 2014, value: 6614 }
    const actual = carValueService.carAdd(input)
    expect(actual).toEqual(expected)
  })
})

// cars api carAdd function that returns an error

const testCases: testCarValue[] = [
  {
    model: 'C1vic',
    year: 2014,
    expected:
      'Please input a valid model.',
  },
  {
    model: 99,
    year: 2014,
    expected:
      'Please input a valid model.',
  },
  {
    model: false,
    year: 2014,
    expected:
      'Please input a valid model.',
  },
  {
    model: '',
    year: 2014,
    expected: 'Model is empty.',
  },
  {
    model: 'Holden R8',
    year: 2014,
    expected:
      'Please input a valid model.',
  },
  {
    model: 'Holden',
    year: -10,
    expected: 'Please input a valid year from 1900 to 2023',
  },
  {
    model: 'Holden',
    year: 1899,
    expected: 'Please input a valid year from 1900 to 2023',
  },
  {
    model: 'Holden',
    year: 2030,
    expected: 'Please input a valid year from 1900 to 2023',
  },
  {
    model: 'Holden',
    year: false,
    expected: 'Please input a valid year from 1900 to 2023',
  },
]

describe('Testing carValueService.carAdd() to return an error', () => {
  testCases.map((testCase) => {
    test(`Model: ${testCase.model} Year: ${testCase.year} should return an Error: ${testCase.expected}`, () => {
      const input = {
        id: 3,
        model: testCase.model,
        year: testCase.year,
      }
      const expected = testCase.expected
      expect(() => {
        carValueService.carAdd(input)
      }).toThrow(expected)
    })
  })
})

// cars api to get a car record by id

describe('Testing carValueService.getCarId', () => {
  test(`Test ID 1 and expecting { id: 1, model: 'Civic', year: 2014, value: 6614 }`, () => {
    //Arrange
    const id = 1
    const expected = { id: 1, model: 'Civic', year: 2014, value: 6614 }

    //Act
    const actual = carValueService.getCarId(id)

    //Assert
    expect(actual).toEqual(expected)
  })
})

