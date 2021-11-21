
import { fizzbuzz } from './fizzbuzz'

describe('fizzbuzz', () => {

  test('should return a string when given two numbers', () => {
    expect(typeof fizzbuzz(1, 2)).toBe('string')
  });

  test('should throw an error if either numbers are outside of 1-100 range', () => {
    expect(() => fizzbuzz(0, 101)).toThrowError();
  });

  test('should still throw an error if only one number is outside of range', () => {
    expect(() => fizzbuzz(1, 200)).toThrowError();
  })

  test('should still return a string if numbers are exactly on 1 to 100 range', () => {
    expect(typeof fizzbuzz(1, 100)).toBe('string')
  })

  test('should return the word "Fizz" if either number is a multiple of 3', () => {
    expect(fizzbuzz(3, 4)).toEqual('Fizz')
  })

  test('should return the word "Fizz" if only one number is a multiple of 3', () => {
    expect(fizzbuzz(3, 5)).toEqual('Fizz')
  })

  test('should return an empty string if neither is a multiple of 3', () => {
    expect(fizzbuzz(1, 1)).toEqual('')
  })

  test('should return the word "Buzz" if either number is a multiple of 5', () => {
    expect(fizzbuzz(1, 5)).toEqual('Buzz')
  })

  test('should return the word "Fizzbuzz" for numbers that are multiples of 3 AND 5', () => {
    expect(fizzbuzz(1, 15)).toEqual('Fizzbuzz')
  })

})