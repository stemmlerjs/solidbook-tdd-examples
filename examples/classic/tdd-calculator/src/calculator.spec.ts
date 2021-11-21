
import { Calculator } from "./calculator";

describe('calculator', () => {

  let calculator = new Calculator();

  test('should exist', () => {
    expect(calculator).toBeDefined();
  });

  test('should be able to add 0, 1, or 2 numbers separated by a comma', () => {
    expect(calculator.add('1,1')).toEqual(2)
  });

  test('should return 0 if no numbers provided', () => {
    expect(calculator.add('')).toEqual(0);
  })

  test('should be able to return the result if only 1 number is provided', () => {
    expect(calculator.add('3')).toEqual(3)
  })

  test('should be able to return the result if 2 numbers are provided', () => {
    expect(calculator.add('43,2')).toEqual(45)
  })

  test('should throw an error if more than two numbers are provided', () => {
    // Need to wrap execution in a function to catch the error
    expect(() => calculator.add('1,2,3')).toThrowError();
  });

  test('should also throw an error if really long sequence of numbers provided', () => {
    expect(() => calculator.add('1,2,3,454,56,56,5656,5656,56')).toThrowError();
  })

  test('should throw an error if we pass in several consecutive commas', () => {
    expect(() => calculator.add('1,,2')).toThrowError("Invalid format");
  })

  test('should throw error if we pass in letters', () => {
    expect(() => calculator.add('a,b')).toThrow('Non-numeric characters found')
  });

});
