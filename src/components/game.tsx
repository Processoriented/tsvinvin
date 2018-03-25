import * as React from 'react';

import Board from './board';

export interface Props {
  board?: string;
  user?: string;
}

const Game = ({ board = 'default', user = 'Vincent' }: Props) => (
    <div className="game">
      <div className="hello">Welcome {user}</div>
      <div className="board">{board}</div>
      <Board size={9} />
    </div>
  );

export default Game;
