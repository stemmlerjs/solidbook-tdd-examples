import { Player } from "./player";
import { Position } from "./position";

export class Grid {

  private grid: string[][];

  constructor () {
    this.setup();
  }

  getMarkAtPosition (position: Position): string | undefined {
    return this.grid[position.row][position.column];
  }

  setMarkAtPosition (position: Position, mark: Player): void {
    this.grid[position.row][position.column] = mark;
  }

  setup () {
    this.grid = new Array(3);

    for (var i = 0; i < this.grid.length; i++) {
      this.grid[i] = new Array(3);
    }
  }
}