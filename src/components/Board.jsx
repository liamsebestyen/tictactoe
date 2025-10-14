import './Board.css';
import Cell from './Cell';

function Board({ board, handleCellClick, winner, winningCells }) {
  return (
    <div className="board">
      {board.map((value, index) => (
        <Cell
          key={index}
          value={value}
          onClick={() => handleCellClick(index)}
          index={index}
          isWinningCell={winningCells && winningCells.includes(index)}
          isDisabled={value !== null || winner !== null}
        />
      ))}
    </div>
  );
}

export default Board;
