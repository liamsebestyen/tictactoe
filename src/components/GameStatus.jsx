import './GameStatus.css';

function GameStatus({ currentPlayer, winner, isDraw }) {
  let message;
  let className = 'game-status';

  if (winner) {
    message = `🎉 Player ${winner} Wins!`;
    className += ' winner';
  } else if (isDraw) {
    message = "🤝 It's a Draw!";
    className += ' draw';
  } else {
    message = `Current Player: ${currentPlayer}`;
    className += ` player-${currentPlayer.toLowerCase()}`;
  }

  return <div className={className}>{message}</div>;
}

export default GameStatus;
