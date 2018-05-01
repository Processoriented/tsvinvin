import * as React from 'react';

import './App.css';
import Game from './components/game';
import { testCages, testCells } from './utility';
import { Puzzle } from './types';

const logo = require('./logo.svg');

const testPuzzle: Puzzle = {
  size: 9,
  cells: testCells,
  cages: testCages,
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Game puzzle={testPuzzle} />
      </div>
    );
  }
}

export default App;
