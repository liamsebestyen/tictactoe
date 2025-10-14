import './Cell.css';

function Cell({ value, onClick, isWinningCell, isDisabled }) {
  return (
    <button
      className={`cell ${value === 'X' ? 'cell-x' : value === 'O' ? 'cell-o' : ''} ${
        isWinningCell ? 'winning-cell' : ''
      }`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {value}
    </button>
  );
}

export default Cell;
