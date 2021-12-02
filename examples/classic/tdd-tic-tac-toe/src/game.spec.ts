
/**
 * - game
 * - board 
 * - players
 * - turn
 * - marking (place a marking on the board)
 */

import { Game } from "./game";

describe('game', () => {

  let game;

  beforeEach(() => {
    game = new Game();
  })

  test('should know that it is Xs turn first', () => {
    let turn = game.getCurrentTurn();
    expect(turn).toEqual('X')
  })

  test("should know that it's O's turn to go after X", () => {
    game.chooseMark({ row: 0, column: 0 })
    let turn = game.getCurrentTurn();
    expect(turn).toBe('O')
  });

  test("should continue to alternate between turns", () => {

    game.chooseMark({ row: 0, column: 0 })

    game.chooseMark({ row: 0, column: 1 })

    let turn = game.getCurrentTurn();

    expect(turn).toEqual('X')

    game.chooseMark({ row: 0, column: 2 })

    turn = game.getCurrentTurn();

    expect(turn).toEqual('O')
  });

  test('should not let players place on the same spot', () => {

    game.chooseMark({ row: 0, column: 0 });

    let playOnSameSpot = () => game.chooseMark({ row: 0, column: 0 });

    expect(() => playOnSameSpot()).toThrowError();
    
  });

  test('should not let players play outside of the 3x3 grid', () => {

    let movePlayedOutsideGrid = () => game.chooseMark({ row: -1, column: 1 });

    expect(() => movePlayedOutsideGrid()).toThrowError();
    
  })

  test('should know that three Xs in a horizontal row wins', () => {
    // Row, col
    game.chooseMark(0,0); // X
    game.chooseMark(1,0); // O
    game.chooseMark(0,1); // X
    game.chooseMark(1,1); // O
    game.chooseMark(0,2); // X
    
    
    expect(game.getGameState()).toBe('X wins')
    expect(game.getWinner('X'))
  })

  // then vertical
  // then diagonal


})