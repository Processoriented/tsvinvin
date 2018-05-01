export interface PuzzleCell {
  row: number;
  column: number;


  solution: number;
}

export interface PuzzleCage {
  hint: string;
  cells: PuzzleCell[];
}

enum Operator {
  A = '+',
  S = '-',
  M = '×',
  D = '÷',
}
export class Hint {
  value: number;
  operator: Operator;

  toString = () => `${this.value}${this.operator.toString()}`;
}

export class PuzzleCagex {
  positions: Position[];
  hint?: Hint;
}

export interface Puzzle {
  size: number;
  cells: PuzzleCell[];
  cages: PuzzleCage[];
}

interface Op {
  operator: Operator;
  getValue: Function;
}

export class PuzzleX {
  cells: PuzzleCellX[] = [];
  cages: PuzzleCagex[] = [];
  
  private cageLengths: number[] = [ 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 6, 7, 8, 9 ];
  private ops: Op[] = [
    { operator: Operator.A, getValue: (vals: number[]) => vals.reduce((a: number, b: number) => a + b, 0) },
    { operator: Operator.M, getValue: (vals: number[]) => vals.reduce((a: number, b: number) => a * b, 0) },
    { operator: Operator.S, getValue: (vals: number[]) => Math.max(vals[0], vals[1]) - Math.min(vals[0], vals[1]) },
    { operator: Operator.D, getValue: (vals: number[]) => Math.max(vals[0], vals[1]) / Math.min(vals[0], vals[1]) },
  ];

  constructor(size: number = 9) {
    const s = Math.max(4, Math.min(9, size));
    Array.apply(null, { length: s })
      .map((r: null, row: number) => Array.apply(null, { length: s })
        .map((c: null, column: number) => this.cells.push(new PuzzleCellX({ row, column }))));
    const seed = this.cells.slice(0, s).map(n => n.position.column + 1)
      .sort(() => Math.random() - 0.5);
    const solns = Array.apply(null, { length: s })
      .map((_: null, r: number) => [ ...seed.slice(r, s), ...seed.slice(0, r)])
      .sort(() => Math.random() - 0.5);
    this.cells.map(c => c.solution = solns[c.position.row][c.position.column]);
    this.makeCages(this.cells.map(c => c.position));
  }
  
  get positions(): Position[] { return this.cells.map(c => c.position); }

  // private cager = (): void => {
  //   const available = this.cells.filter(c => )
  // }

  private makeCages = (available: Position[]) => {
    if (available.length === 0) { return; }
    const cagePosns = [];
    let next: Position = available[0];
    available = available.splice(1);
    cagePosns.push(next);
    let cageLength = this.cageLengths.sort(() => Math.random() - 0.5)[0];
    while (cageLength > cagePosns.length) {
      const choices: (Position | undefined)[] = [
        available
          .filter(p => p.row === next.row)
          .find(p => p.column === next.column + 1),
        available
          .filter(p => p.column === next.column)
          .find(p => p.row === next.row + 1),
      ].sort(() => Math.random() - 0.5).filter(p => !!p);
      if (choices.length > 0 && choices[0]) {
        next = choices[0] || next;
        cagePosns.push(next);
        available = available.filter(p => (!(p.row === next.row && p.column === next.column)));
      } else {
        cageLength = cagePosns.length;
      }
    }
    this.cages.push({ positions: cagePosns });
    this.makeCages(available);
  }

  private getCell = (pos: Position) => {
    const row = this.cells.filter(c => c.position.row === pos.row);
    return row.find(c => c.position.column === pos.column);
  }

  private makeHints = () => {
    this.cages.filter(g => g.positions.length > 1).map(g => {
      const op = this.ops.filter(o => (g.positions.length === 2
          || o.operator === Operator.A || o.operator === Operator.M))
        .sort(() => Math.random() - 0.5)[0];
      const cells: (PuzzleCellX | undefined)[] = g.positions
        .map(p => this.getCell(p)).filter(c => c !== undefined);
      const val = op.getValue(cells.map(c => c.solution) || null);

    });
  }

  get size(): number { return Math.pow(this.cells.length, 0.5); }
}

interface Position {
  row: number;
  column: number;
}

interface CageBorders {
  top: boolean;
  right: boolean;
  bottom: boolean;
  left: boolean;
}

export class PuzzleCellX {
  position: Position;
  solution?: number;
  borders?: CageBorders;
  hint?: Hint;

  constructor(pos: Position) {
    this.position = pos;
  }

  get id(): number { return ((this.position.row * 10) + this.position.column) / 10; }
}
