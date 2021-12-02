
import { Calculator, StatsResult } from './calculator'

describe('calculator', () => {

  test('should calculate minimum value from a range of numbers', () => {
    let result: StatsResult;
    let calculator = new Calculator();

    result = calculator.processStats([2, 4, 21, -8, 53, 40]);

    expect(result.min).toEqual(-8)
  });

  // .. Continue

})