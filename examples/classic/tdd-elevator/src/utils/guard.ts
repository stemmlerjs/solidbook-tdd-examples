export class Guard {
  public static againstNullOrUndefined(obj: any, message: string): void {
    if (obj === undefined || obj === null) {
      throw new Error(message);
    }
  }
}
