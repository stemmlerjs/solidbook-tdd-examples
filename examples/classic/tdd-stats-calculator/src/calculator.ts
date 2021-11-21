
export class Calculator {
  
  calculateMin (numbers: number[]): number {
    let minValue;

    if (numbers.length == 0) {
      return -1;
    }

    numbers.forEach((number) => {
      if (!minValue) minValue = number;
      if (number < minValue) {
        minValue = number;
      }
    })

    return minValue;
  }
}