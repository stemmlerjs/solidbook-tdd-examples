
export type State = 'Ongoing' | 'X wins' | 'Y wins' | 'draw'

export class GameState {

  private state: State;

  constructor () {
    this.state = 'Ongoing';
  }

  getGameState (): State {
    return this.state;
  }

}