
import { fibonacci } from './index'

describe('fibonacci', () => {

  it('returns 0 for sequence position 0', () => {
    expect(fibonacci(0)).toEqual(0)
  })

  it('returns 1 for sequence position 1', () => {
    expect(fibonacci(1)).toEqual(1)
  });

  it('returns 1 for sequence position 2', () => {
    expect(fibonacci(2)).toEqual(1)
  });

  it('returns 2 for sequence position 3', () => {
    expect(fibonacci(3)).toEqual(2)
  });

  it('returns 3 for sequence position 4', () => {
    expect(fibonacci(4)).toEqual(3)
  });

  it('returns 5 for sequence position 5', () => {
    expect(fibonacci(5)).toEqual(5)
  });

  it('returns 8 for sequence position 6', () => {
    expect(fibonacci(6)).toEqual(8)
  });

  it('returns 13 for sequence position 7', () => {
    expect(fibonacci(7)).toEqual(13)
  });

  it('returns 21 for sequence position 8', () => {
    expect(fibonacci(8)).toEqual(21)
  });

  it('returns 34 for sequence position 9', () => {
    expect(fibonacci(9)).toEqual(34)
  });

})