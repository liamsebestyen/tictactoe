import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import GameStatus from './components/GameStatus';
import ResetButton from './components/ResetButton';

// Winning combinations (rows, columns, diagonals)
const WINNING_COMBINATIONS = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal top-left to bottom-right
  [2, 4, 6], // Diagonal top-right to bottom-left
];

function App() {
  // Game state
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [winningCells, setWinningCells] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  // Check for winner
  const checkWinner = (boardState) => {
    for (let combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination;
      if (
        boardState[a] &&
        boardState[a] === boardState[b] &&
        boardState[a] === boardState[c]
      ) {
        return { winner: boardState[a], cells: combination };
      }
    }
    return null;
  };

  // Check for draw
  const checkDraw = (boardState) => {
    return boardState.every((cell) => cell !== null);
  };

  // Handle cell click
  const handleCellClick = (index) => {
    // Don't allow move if cell is occupied or game is over
    if (board[index] || winner || isDraw) {
      return;
    }

    // Create new board with the move
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    // Check for winner
    const winResult = checkWinner(newBoard);
    if (winResult) {
      setWinner(winResult.winner);
      setWinningCells(winResult.cells);
      return;
    }

    // Check for draw
    if (checkDraw(newBoard)) {
      setIsDraw(true);
      return;
    }

    // Switch player
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  // Reset game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
    setWinningCells(null);
    setIsDraw(false);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Tic Tac Toe</h1>
        <GameStatus
          currentPlayer={currentPlayer}
          winner={winner}
          isDraw={isDraw}
        />
        <Board
          board={board}
          handleCellClick={handleCellClick}
          winner={winner}
          winningCells={winningCells}
        />
        <ResetButton resetGame={resetGame} />
      </div>
    </div>
  );
}

export default App;
