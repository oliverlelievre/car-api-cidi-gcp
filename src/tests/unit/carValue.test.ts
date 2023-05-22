import carValueService from '../../services/carValueService';

describe('calculateCarValue', () => {
  it('should return the correct car value for valid input', () => {
    const model = 'Civic';
    const year = 2014;
    const expectedValue = 6614;
    const result = carValueService.calculateCarValue(model, year);
    expect(result).toBe(expectedValue);
  });

  it('should handle empty model name and return null', () => {
    const model = '';
    const year = 2014;
    const result = carValueService.calculateCarValue(model, year);
    expect(result).toBeNull();
  });

  it('should handle negative year and return null', () => {
    const model = 'Civic';
    const year = -2014;
    const result = carValueService.calculateCarValue(model, year);
    expect(result).toBeNull();
  });

  it('should ignore spaces in the model name', () => {
    const model = 'C iv ic';
    const year = 2014;
    const expectedValue = 6614;
    const result = carValueService.calculateCarValue(model, year);
    expect(result).toBe(expectedValue);
  });

  it('should ignore special characters and calculate the expected', () => {
    const model = 'C!vic';
      const year = 2014;
      const expectedValue = 5714;
    const result = carValueService.calculateCarValue(model, year);
    expect(result).toBe(expectedValue);
  });
});
