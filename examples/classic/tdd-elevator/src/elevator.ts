
import { Call } from './call';
import { Floor } from './floor';

export type FloorValue = 'ground' | 'basement' | number;

export type Direction = 'Up' | 'Down' | 'None';

export enum Floors {
  basement = -1,
  ground = 0,
  floor1 = 1,
  floor2 = 2,
  floor3 = 3
}

interface Event {
  type: string;
  value: any;
  timestamp: number;
}

export interface FloorChanged extends Event {
  type: 'FloorChanged';
  value: {
    start: number;
    end: number;
  };
}

export interface DoorsOpenedAndClosed extends Event {
  type: 'DoorsOpenedAndClosed';
  value: {
    floor: number;
  };
}

export class Elevator {
  private floor: Floor;
  private currentCalls: Call[];
  private elapsedTimeInSeconds: number;
  private events: Event[];

  constructor (startingFloor: Floor) {
    this.floor = startingFloor;
    this.currentCalls = [];
    this.elapsedTimeInSeconds = 0;
    this.events = [];
  }

  getCurrentCalls(): Call[] {
    return this.currentCalls;
  }

  hasCalls(): boolean {
    return this.currentCalls.length !== 0;
  }

  getCurrentFloor(): Floor {
    return this.floor;
  }

  getEvents(): Event[] {
    return this.events;
  }

  private determineDirection(start: number, dest: number): Direction {
    if (start < dest) {
      return 'Up';
    }

    if (start > dest) {
      return 'Down';
    }

    return 'None';
  }

  handleCall(): void {
    const nextCall = this.currentCalls.splice(0, 1)[0];

    const startingFloorValue = nextCall.getStartingFloor().getValue();
    const destinationFloorValue = nextCall.getDestinationFloor().getValue();

    const startingDirection = this.determineDirection(
      this.getCurrentFloor().getValue(),
      startingFloorValue,
    );
    const endingDirection = this.determineDirection(
      startingFloorValue,
      destinationFloorValue,
    );

    const startingDistance = Math.abs(
      this.getCurrentFloor().getValue() - startingFloorValue,
    );

    const endingDistance = Math.abs(startingFloorValue - destinationFloorValue);

    for (let i = 0; i < startingDistance; i++) {
      this.advance(startingDirection);
    }

    this.openAndClose();

    for (let i = 0; i < endingDistance; i++) {
      this.advance(endingDirection);
    }

    this.openAndClose();
  }

  private advance(direction: Direction): void {
    this.elapsedTimeInSeconds++;

    let newFloor: Floor;

    if (direction === 'Up') {
      newFloor = this.floor.ascend();
    }

    if (direction === 'Down') {
      newFloor = this.floor.descend();
    }

    this.events.push({
      type: 'FloorChanged',
      timestamp: this.elapsedTimeInSeconds,
      value: {
        start: this.floor.getValue(),
        end: newFloor.getValue(),
      },
    } as FloorChanged);

    this.floor = newFloor;
  }

  private openAndClose(): void {
    this.elapsedTimeInSeconds += 3;

    this.events.push({
      type: 'DoorsOpenedAndClosed',
      timestamp: this.elapsedTimeInSeconds,
      value: {
        floor: this.floor.getValue(),
      },
    } as DoorsOpenedAndClosed);
  }

  call({ from, to }: { from: FloorValue; to: FloorValue }): void {
    const fromFloor = Floor.create(from);
    const downFloor = Floor.create(to);

    const call = Call.create(fromFloor, downFloor);
    this.currentCalls.push(call);
  }
}
