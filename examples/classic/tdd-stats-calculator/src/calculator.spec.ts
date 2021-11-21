
import { Calculator } from './calculator'

describe('calculator', () => {

  let calculator;
  let result;

  beforeEach(() => {
    calculator = new Calculator();
    result = null;
  });

  test('should calculate minimum value from a range of numbers', () => {

    result = calculator.calculateMin([6, 9, 15, -2, 92, 11]);

    expect(result).toEqual(-2)
  });

  test('should calculate minimum from a list of numbers that are the same', () => {
      
    result = calculator.calculateMin([5, 5, 5, 5]);

    expect(result).toEqual(5);

  });

  test('should calculate minimum from a list of decimal numbers', () => {

    result = calculator.calculateMin([5, 4, 3, 9, 2, 0.123251, 7])

    expect(result).toEqual(0.123251)
  
  })

  test('should return -1 if we dont pass in any numbers', () => {

    result = calculator.calculateMin([]);

    expect(result).toEqual(-1);
  
  })

})