import * as React from 'react';

import Row from './row';
import { Puzzle, PuzzleCell } from '../types';

export interface Props {
  puzzle: Puzzle;
}

const Board = ({ puzzle }: Props) => (
  <div className="board-wrapper">
    { Array.apply([], { length: puzzle.size }).map((cells: PuzzleCell[], i: number) => {
      puzzle.cells.filter(c => c.row === i).map(c => cells.push(c));
      return (<Row cells={cells} cages={puzzle.cages} key={`Row${i}`} />);
    })}
  </div>
);

export default Board;
