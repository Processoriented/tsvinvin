export interface PuzzleCell {
  row: number;
  column: number;
  solution: number;
}

export interface PuzzleCage {
  hint: string;
  cells: PuzzleCell[];
}

export class Puzzle {
  cells: PuzzleCell[];
  cages: PuzzleCage[];

  constructor(cells: PuzzleCell[] = [], cages: PuzzleCage[] = []) {
    this.cells = cells;
    this.cages = cages;
  }

  get size(): number { return Math.sqrt(this.cells.length); }
}

const testCells: PuzzleCell[] = [
  { row: 0, column: 0, solution: 3 }, // 0
  { row: 0, column: 1, solution: 8 }, // 1
  { row: 0, column: 2, solution: 1 }, // 2
  { row: 0, column: 3, solution: 5 }, // 3
  { row: 0, column: 4, solution: 2 }, // 4
  { row: 0, column: 5, solution: 6 }, // 5
  { row: 0, column: 6, solution: 9 }, // 6
  { row: 0, column: 7, solution: 4 }, // 7
  { row: 0, column: 8, solution: 7 }, // 8
  { row: 1, column: 0, solution: 1 }, // 9
  { row: 1, column: 1, solution: 3 }, // 10
  { row: 1, column: 2, solution: 7 }, // 11
  { row: 1, column: 3, solution: 8 }, // 12
  { row: 1, column: 4, solution: 5 }, // 13
  { row: 1, column: 5, solution: 2 }, // 14
  { row: 1, column: 6, solution: 4 }, // 15
  { row: 1, column: 7, solution: 6 }, // 16
  { row: 1, column: 8, solution: 9 }, // 17
  { row: 2, column: 0, solution: 5 }, // 18
  { row: 2, column: 1, solution: 9 }, // 19
  { row: 2, column: 2, solution: 6 }, // 20
  { row: 2, column: 3, solution: 7 }, // 21
  { row: 2, column: 4, solution: 3 }, // 22
  { row: 2, column: 5, solution: 4 }, // 23
  { row: 2, column: 6, solution: 1 }, // 24
  { row: 2, column: 7, solution: 8 }, // 25
  { row: 2, column: 8, solution: 2 }, // 26
  { row: 3, column: 0, solution: 9 }, // 27
  { row: 3, column: 1, solution: 7 }, // 28
  { row: 3, column: 2, solution: 8 }, // 29
  { row: 3, column: 3, solution: 1 }, // 30
  { row: 3, column: 4, solution: 6 }, // 31
  { row: 3, column: 5, solution: 5 }, // 32
  { row: 3, column: 6, solution: 2 }, // 33
  { row: 3, column: 7, solution: 3 }, // 34
  { row: 3, column: 8, solution: 4 }, // 35
  { row: 4, column: 0, solution: 4 }, // 36
  { row: 4, column: 1, solution: 5 }, // 37
  { row: 4, column: 2, solution: 9 }, // 38
  { row: 4, column: 3, solution: 6 }, // 39
  { row: 4, column: 4, solution: 7 }, // 40
  { row: 4, column: 5, solution: 8 }, // 41
  { row: 4, column: 6, solution: 3 }, // 42
  { row: 4, column: 7, solution: 2 }, // 43
  { row: 4, column: 8, solution: 1 }, // 44
  { row: 5, column: 0, solution: 2 }, // 45
  { row: 5, column: 1, solution: 4 }, // 46
  { row: 5, column: 2, solution: 3 }, // 47
  { row: 5, column: 3, solution: 9 }, // 48
  { row: 5, column: 4, solution: 8 }, // 49
  { row: 5, column: 5, solution: 1 }, // 50
  { row: 5, column: 6, solution: 5 }, // 51
  { row: 5, column: 7, solution: 7 }, // 52
  { row: 5, column: 8, solution: 6 }, // 53
  { row: 6, column: 0, solution: 7 }, // 54
  { row: 6, column: 1, solution: 2 }, // 55
  { row: 6, column: 2, solution: 4 }, // 56
  { row: 6, column: 3, solution: 3 }, // 57
  { row: 6, column: 4, solution: 1 }, // 58
  { row: 6, column: 5, solution: 9 }, // 59
  { row: 6, column: 6, solution: 6 }, // 60
  { row: 6, column: 7, solution: 5 }, // 61
  { row: 6, column: 8, solution: 8 }, // 62
  { row: 7, column: 0, solution: 8 }, // 63
  { row: 7, column: 1, solution: 6 }, // 64
  { row: 7, column: 2, solution: 2 }, // 65
  { row: 7, column: 3, solution: 4 }, // 66
  { row: 7, column: 4, solution: 9 }, // 67
  { row: 7, column: 5, solution: 3 }, // 68
  { row: 7, column: 6, solution: 7 }, // 69
  { row: 7, column: 7, solution: 1 }, // 70
  { row: 7, column: 8, solution: 5 }, // 71
  { row: 8, column: 0, solution: 6 }, // 72
  { row: 8, column: 1, solution: 1 }, // 73
  { row: 8, column: 2, solution: 5 }, // 74
  { row: 8, column: 3, solution: 2 }, // 75
  { row: 8, column: 4, solution: 4 }, // 76
  { row: 8, column: 5, solution: 7 }, // 77
  { row: 8, column: 6, solution: 8 }, // 78
  { row: 8, column: 7, solution: 9 }, // 79
  { row: 8, column: 8, solution: 3 }, // 80
];

const testCages: PuzzleCage[] = [
  { hint: '24*', cells: [testCells[0], testCells[1]] },
  { hint: '35*', cells: [testCells[2], testCells[3], testCells[11]] },
  { hint: '7+', cells: [testCells[4], testCells[13]] },
  { hint: '3/', cells: [testCells[5], testCells[14]] },
  { hint: '20+', cells: [testCells[6], testCells[7], testCells[8]] },
  { hint: '3/', cells: [testCells[9], testCells[10]] },
  { hint: '1-', cells: [testCells[12], testCells[21]] },
  { hint: '48*', cells: [testCells[15], testCells[16], testCells[24], testCells[33]] },
  { hint: '432*', cells: [testCells[17], testCells[25], testCells[26], testCells[34]] },
  { hint: '18+', cells: [testCells[18], testCells[27], testCells[36]] },
  { hint: '3-', cells: [testCells[19], testCells[20]] },
  { hint: '1-', cells: [testCells[22], testCells[23]] },
  { hint: '2-', cells: [testCells[28], testCells[37]] },
  { hint: '8*', cells: [testCells[29], testCells[30]] },
  { hint: '11+', cells: [testCells[31], testCells[32]] },
  { hint: '4/', cells: [testCells[35], testCells[44]] },
  { hint: '378*', cells: [testCells[38], testCells[39], testCells[40]] },
  { hint: '8*', cells: [testCells[41], testCells[50]] },
  { hint: '10+', cells: [testCells[42], testCells[43], testCells[51]] },
  { hint: '2-', cells: [testCells[45], testCells[46]] },
  { hint: '216*', cells: [testCells[47], testCells[48], testCells[49]] },
  { hint: '35*', cells: [testCells[52], testCells[61]] },
  { hint: '14+', cells: [testCells[53], testCells[62]] },
  { hint: '5-', cells: [testCells[54], testCells[55]] },
  { hint: '1-', cells: [testCells[56], testCells[57]] },
  { hint: '8-', cells: [testCells[58], testCells[67]] },
  { hint: '3-', cells: [testCells[59], testCells[60]] },
  { hint: '2-', cells: [testCells[63], testCells[72]] },
  { hint: '12+', cells: [testCells[64], testCells[73], testCells[74]] },
  { hint: '2/', cells: [testCells[65], testCells[66]] },
  { hint: '10+', cells: [testCells[68], testCells[69]] },
  { hint: '15*', cells: [testCells[70], testCells[71], testCells[80]] },
  { hint: '2-', cells: [testCells[75], testCells[76]] },
  { hint: '504*', cells: [testCells[77], testCells[78], testCells[79]] },
];

export const testPuzzle: Puzzle = new Puzzle(testCells, testCages);

export default testPuzzle;
