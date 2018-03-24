import * as React from 'react';

export interface Props {
  board?: string;
  user?: string;
}

const Game = ({ board = 'default', user = 'Vincent' }: Props) => (
    <div className="game">
      <div className="hello">Welcome {user}</div>
      <div className="board">{board}</div>
    </div>
  );

export default Game;
