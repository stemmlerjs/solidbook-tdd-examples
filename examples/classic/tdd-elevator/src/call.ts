
import { Floor } from "./floor";
import { Guard } from "./utils/guard";

export class Call {
  private from: Floor;
  private to: Floor;

  private constructor(from: Floor, to: Floor) {
    this.from = from;
    this.to = to;
  }

  getStartingFloor(): Floor {
    return this.from;
  }

  getDestinationFloor(): Floor {
    return this.to;
  }

  public static create(from: Floor, to: Floor): Call {
    Guard.againstNullOrUndefined(from, 'Must provide a from position value');
    Guard.againstNullOrUndefined(to, 'Must provide a to position value');

    return new Call(from, to);
  }
}