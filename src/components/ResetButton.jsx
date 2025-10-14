import './ResetButton.css';

function ResetButton({ resetGame }) {
  return (
    <button className="reset-button" onClick={resetGame}>
      🔄 New Game
    </button>
  );
}

export default ResetButton;
