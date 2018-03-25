import * as React from 'react';

import Cell from './cell';

export interface Props {
  size: number;
  row: number;
}

const Row = ({ size, row }: Props) => (
  <div className="row">
    { Array.apply(null, {length: size }).map((x: string, i: number) => (
      <Cell size={size} row={row} column={i} black={((row + i) % size)} key={`R${row}C${i}`} />
    ))}
  </div>
);

export default Row;
