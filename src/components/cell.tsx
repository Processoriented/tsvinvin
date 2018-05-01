import * as React from 'react';

import { PuzzleCell, PuzzleCage } from '../types';

export interface Props {
  size: number;
  cell: PuzzleCell;
  cage?: PuzzleCage;
}

const Cell = ({ size, cell, cage }: Props) => (
  <div className={`cell-${size}`}>{cell.solution}</div>
);

export default Cell;
