
import { FloorValue } from "./elevator";
import { Guard } from "./utils/guard";
import { NumUtils } from "./utils/numUtils";

export class Floor {
  private static MinFloor = -1;
  private static MaxFloor = 5;

  private value: number;

  private constructor(value: number) {
    this.value = value;
  }

  getValue(): number {
    return this.value;
  }

  ascend(): Floor {
    if (this.value === Floor.MaxFloor) {
      throw new Error("Can't ascend further past top floor");
    }

    return new Floor(this.value + 1);
  }

  descend(): Floor {
    if (this.value === Floor.MinFloor) {
      throw new Error("Can't descend further past basement");
    }

    return new Floor(this.value - 1);
  }

  public static create(value: FloorValue): Floor {
    Guard.againstNullOrUndefined(value, 'Must provide a position value');

    if (typeof value === 'number' && !NumUtils.greaterThanOrEq(value, -1)) {
      throw new Error('Must be greater than or equal to -1');
    }

    return value === 'ground'
      ? new Floor(0)
      : value === 'basement'
      ? new Floor(-1)
      : new Floor(Number(value));
  }
}