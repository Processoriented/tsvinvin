import * as React from 'react';

export interface Props {
  size?: number;
  row?: number;
  column?: number;
  greens?: number[];
  reds?: number[];
  black?: number;
  solution?: number;
}

const Cell = ({ size, row, column, black }: Props) => (
  <div className={`cell-${size}`}>{black}</div>
);

export default Cell;
