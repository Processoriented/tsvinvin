import * as React from 'react';

import Cell from './cell';
import { PuzzleCell, PuzzleCage } from '../types';

export interface Props {
  cells: PuzzleCell[];
  cages: PuzzleCage[];
}

const getCage = (cell: PuzzleCell, cages: PuzzleCage[]): PuzzleCage | undefined => {
  const matches = cages.filter(g => (!!g.cells)); 
  return (!matches) ? undefined : matches[0];
};

const Row = ({ cells, cages }: Props) => (
  <div className="row">
    { cells.map((cell: PuzzleCell) => (
      <Cell
        size={cells.length}
        cell={cell}
        cage={getCage(cell, cages)}
        key={`R${cell.row}C${cell.column}`}
      />
    ))}
  </div>
);

export default Row;
