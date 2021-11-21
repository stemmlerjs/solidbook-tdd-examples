
import { GameState, State } from "./gameState";
import { Grid } from "./grid";
import { Player } from "./player";
import { Position } from "./position";

export class Game {

  private currentTurn: Player;
  private grid: Grid;
  private gameState: GameState;

  constructor () {
    this.currentTurn = 'X';
    this.gameState = new GameState();
    this.grid = new Grid();
  }

  getCurrentTurn (): Player {
    return this.currentTurn;
  }

  getInstructions (): string {
    return "Player x: Place a marking on the board"
  }

  updateCurrentTurn (): void {
    if (this.currentTurn === 'X') {
      this.currentTurn = 'O'
    } else {
      this.currentTurn = 'X'
    }
  }

  isPositionMarked (position: Position): boolean {
    return !!this.grid.getMarkAtPosition(position);
  }

  isPositionOutsideGrid (position: Position): boolean {
    if (position.row < 0 || position.row > 2 || position.column < 0 || position.column > 2) {
      return true;
    } else {
      return false;
    }
  }

  private horizontal (position: Position, rowValue?: string): string {
    if (this.isPositionOutsideGrid(position)) {
      return rowValue;
    } 

    return this.grid.getMarkAtPosition(position) + this.horizontal({ 
      row: position.row + 1, 
      column: position.column
    })
  }

  private detectWinner (): void {
    // Let's only detect horizontal right now
    const row = this.horizontal({ row: 0, column: 0 });
    console.log(row);
    
  }

  getGameState (): State {
    return this.gameState.getGameState();
  }

  chooseMark (position: Position): void {
    if(this.isPositionOutsideGrid(position)) {
      throw new Error(`Position: ${position.row},${position.column} is outside of the grid.`)
    }

    if (this.isPositionMarked(position)) {
      throw new Error(`Position: ${position.row},${position.column} has already been marked.`)
    }

    this.grid.setMarkAtPosition(position, this.getCurrentTurn());

    this.detectWinner();

    this.updateCurrentTurn();
  }

}