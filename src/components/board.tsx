import * as React from 'react';

import Row from './row';

export interface Props {
  size?: number;
}

const Board = ({ size = 9 }: Props) => (
  <div className="board-wrapper">
    { Array.apply(null, { length: size }).map((x: string, i: number) => (
      <Row size={size} row={i} key={`Row${i}`} />)
    )}
  </div>
);

export default Board;
