# Tic Tac Toe Game

A modern, interactive Tic Tac Toe game built with React and Vite.

## Features

- ✨ Clean and modern UI design
- 🎮 Two-player gameplay
- 🏆 Win detection for all 8 possible winning combinations
- 🤝 Draw detection
- 🎨 Animated game pieces and winning cells
- 📱 Fully responsive design for mobile and desktop
- 🔄 Reset game functionality
- 💫 Smooth transitions and animations

## Tech Stack

- **Frontend**: React.js 18
- **Build Tool**: Vite
- **Styling**: CSS3 with modern features (Grid, Flexbox, Animations)
- **State Management**: React Hooks (useState)

## Project Structure

```
tictactoe/
├── src/
│   ├── components/
│   │   ├── Board.jsx          # Game board component
│   │   ├── Board.css
│   │   ├── Cell.jsx            # Individual cell component
│   │   ├── Cell.css
│   │   ├── GameStatus.jsx      # Status display component
│   │   ├── GameStatus.css
│   │   ├── ResetButton.jsx     # Reset button component
│   │   └── ResetButton.css
│   ├── App.jsx                 # Main app component with game logic
│   ├── App.css
│   ├── index.css               # Global styles
│   └── main.jsx                # App entry point
├── public/
├── index.html
├── package.json
├── vite.config.js
├── requirements.md
└── spec.md
```

## Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd /Users/LiamSebestyen/local/tictactoe
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Note**: This project requires Node.js version 20.19+ or 22.12+. If you have an older version, please upgrade:
   - Using nvm: `nvm install 22` or `nvm install 20.19`
   - Or download from: https://nodejs.org/

## Running the Application

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser and navigate to:**
   ```
   http://localhost:5173
   ```

## How to Play

1. The game starts with Player X
2. Click on any empty cell to place your mark (X or O)
3. Players alternate turns automatically
4. The first player to get three marks in a row (horizontally, vertically, or diagonally) wins
5. If all cells are filled without a winner, the game is a draw
6. Click "🔄 New Game" to start over at any time

## Game Features Explained

### Win Detection
The game checks all 8 possible winning combinations:
- 3 horizontal rows
- 3 vertical columns
- 2 diagonal lines

### Visual Feedback
- **Current Player Indicator**: Shows whose turn it is with color-coded styling
- **Winning Cells**: Highlighted in green with pulsing animation
- **Game Status**: Dynamic messages for current player, winner, or draw
- **Cell Animations**: Pop-in effect when placing marks
- **Hover Effects**: Visual feedback on cell hover

### Responsive Design
- Adapts to different screen sizes
- Optimized for both mobile and desktop
- Touch-friendly on mobile devices

## Component Overview

### App.jsx
- Main component containing game logic
- Manages game state (board, current player, winner, draw)
- Implements win/draw detection algorithms
- Handles player moves and game resets

### Board.jsx
- Renders the 3x3 grid
- Maps board state to Cell components
- Passes click handlers and winning cell information

### Cell.jsx
- Individual clickable cell
- Displays X or O marks
- Handles visual states (empty, occupied, winning)
- Disables interaction when game is over

### GameStatus.jsx
- Displays current game status
- Shows whose turn it is
- Announces winners or draws
- Color-coded for different states

### ResetButton.jsx
- Provides game reset functionality
- Always accessible during gameplay

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements (Based on Requirements)

The current implementation provides a solid foundation. Based on the requirements, potential enhancements could include:

1. **Computer AI Opponent**
   - Easy difficulty (random moves)
   - Medium difficulty (basic strategy)
   - Hard difficulty (minimax algorithm)

2. **Game Settings**
   - Choose symbol (X or O)
   - Select who goes first
   - Player vs Player or Player vs Computer mode

3. **Additional Features**
   - Score tracking across multiple games
   - Undo move functionality
   - Sound effects
   - Animations for game start/end

## License

This project is open source and available for educational purposes.

## Contributing

Feel free to fork this project and add your own enhancements!

---

Built with ❤️ using React and Vite

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
