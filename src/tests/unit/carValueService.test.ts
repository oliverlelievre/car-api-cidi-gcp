import * as carValueService from '../../services/carValueService';
import { testCarValue, carInput } from '../../types/carValue'


// test for carValueService.getAllCars() to return all car records

describe('Testing carValueService.getAllCars()', () => {
  test('should return 1 record of car', () => {
    //Arrange
    const expected = [{ id: 1, model: 'Holden', year: 2008, value: 7808 }]

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
      model: 'Holden',
      year: 2008,
      value: 7808,
    }
    const expected = { id: 2, model: 'Holden', year: 2008, value: 7808 }
    const actual = carValueService.carAdd(input)
    expect(actual).toEqual(expected)
  })
})

// cars api carAdd function that returns an error

const testCases: testCarValue[] = [

  {
    model: 'Holden',
    year: 1899,
    expected: 'Please input a valid year from 1900 to 2023',
  },
  {
    model: 'Holden',
    year: 2050,
    expected: 'Please input a valid year from 1900 to 2023',
  },
  {
    model: 'Holden',
    year: false,
    expected: 'Please input a valid year from 1900 to 2023',
  },
    {
    model: 'Hold3n',
    year: 2008,
    expected:
      'Please input a valid model.',
  },
  {
    model: 99,
    year: 2008,
    expected:
      'Please input a valid model.',
  },
  {
    model: false,
    year: 2008,
    expected:
      'Please input a valid model.',
  },
  {
    model: '',
    year: 2008,
    expected: 'Model is empty.',
  },
  {
    model: 'Holden R8',
    year: 2008,
    expected:
      'Please input a valid model.',
  },
  {
    model: 'Holden',
    year: -10,
    expected: 'Please input a valid year from 1900 to 2023',
  },
]

describe('Testing carValueService.carAdd() to return an error', () => {
  testCases.forEach((testCase) => {
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

// test for carValueService.getCarId

describe('Testing carValueService.getCarId', () => {
  test(`Test ID 1 and expecting { id: 1, model: Holden, year: 2008, value: 7808 }`, () => {
    //Arrange
    const id = 1
    const expected = { id: 1, model: 'Holden', year: 2008, value: 7808 }

    //Act
    const actual = carValueService.getCarId(id)

    //Assert
    expect(actual).toEqual(expected)
  })
})

