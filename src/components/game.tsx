import * as React from 'react';

import Board from './board';
import { Puzzle, PuzzleX } from '../types';

export interface Props {
  puzzle: Puzzle;
}

const Game = (props: Props) => {
  const x = new PuzzleX();
  // tslint:disable-next-line:no-console
  console.log(x);
  return (
    <div className="game">
      <Board puzzle={props.puzzle} />
    </div>
  );
};

export default Game;
