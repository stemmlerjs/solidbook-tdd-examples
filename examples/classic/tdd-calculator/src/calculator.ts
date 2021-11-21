
export class Calculator {

  private isNumber (string: string): boolean {
    return !isNaN(parseInt(string));
  }

  private isEmptyString (string: string): boolean {
    return string === "";
  }

  private hasNonNumericCharacters (addendsArray: string[]): boolean {
    const found = addendsArray.find((addend) => !this.isNumber(addend) && !this.isEmptyString(addend))
    return !!found;
  }

  private hasConsecutiveComments (string: string): boolean {
    return string.indexOf(",,") !== -1
  }

  public add (numbers: string): number {
    const addends = numbers.split(',');
    let sum = 0;

    if (this.hasNonNumericCharacters(addends))
      throw new Error("Non-numeric characters found")

    if (this.hasConsecutiveComments(numbers)) 
      throw new Error("Invalid format")

    if (addends.length > 2) 
      throw new Error("You can only pass 0, 1, or 2 numbers to add");
    
    addends.forEach((num) => sum += Number(num));
    return sum;
  }

}