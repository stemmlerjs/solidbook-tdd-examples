
export type StatsResult = {
  min: number;
}


export class Calculator {

  private getMinValue (numbers: number[]): number {
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
  
  processStats (numbers: number[]): StatsResult {
    return {
      min: this.getMinValue(numbers)
    }
  }
}