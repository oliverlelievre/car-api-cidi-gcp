export const calculateValue = (model: string, year: number) => {
  const modelCheck = calculateModel(checkModel(model))
  const yearCheck = checkYear(year)

  if (typeof modelCheck !== 'number' || typeof yearCheck !== 'number') {
    throw 'Make sure that model (string) and year (number) are correct.'
  }

  const result = modelCheck + yearCheck

  if (!result) {
    throw 'Make sure that model and year are correct.'
  }

  if (result === Infinity) {
    throw new RangeError('The result is infinity')
  }

  return result
}

const checkModel = (str: string) => {
  if (str === '') throw 'Model is empty.'
  if (typeof str === 'string' && /^[a-zA-Z]+$/.test(str)) {
    return str
  } else {
    throw `Please input a valid model.`
  }
}

const checkYear = (num: number) => {
  var currentDate = new Date()
  if (num === undefined) throw 'Year is empty.'
  if (num < 1900 || num > currentDate.getFullYear())
    throw `Please input a valid year from 1900 to ${currentDate.getFullYear()}`
  if (typeof num !== 'number') throw `Year should be a number.`
  return num
}

const calculateModel = (str: string) => {
  checkModel(str)
  let output = 0
  const char = str.toUpperCase().split('')
  char.map((char) => {
    output += char.charCodeAt(0) - 64
  })
  return output * 100
}