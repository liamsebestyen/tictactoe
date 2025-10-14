# Tic-Tac-Toe Game - Implementation Specification

## Tech Stack
- React (with Create React App or Vite)
- CSS3 (or CSS Modules/Styled Components)
- JavaScript (ES6+)

## User Stories

### US1: Game Board Display
**As a** player  
**I want to** see a 3x3 game board  
**So that** I can play tic-tac-toe

### US2: Make a Move
**As a** player  
**I want to** click on an empty cell to place my mark (X or O)  
**So that** I can make my move

### US3: Alternating Turns
**As a** player  
**I want to** alternate turns with my opponent  
**So that** the game is fair

### US4: Win Detection
**As a** player  
**I want to** be notified when someone wins  
**So that** I know the game outcome

### US5: Draw Detection
**As a** player  
**I want to** be notified when the game is a draw  
**So that** I know when there's no winner

### US6: Reset Game
**As a** player  
**I want to** reset the game at any time  
**So that** I can start a new game

### US7: Current Player Indicator
**As a** player  
**I want to** see whose turn it is  
**So that** I know when to make my move

## Implementation Steps

### Step 1: Project Structure Setup
- Initialize React app using `npx create-react-app tictactoe` or `npm create vite@latest tictactoe -- --template react`
- Navigate to project directory
- Review default file structure
- Clean up unnecessary boilerplate files

### Step 2: Component Architecture
- Create `App.js` as main component
- Create `Board.js` component (renders the game board)
- Create `Cell.js` component (individual cell)
- Create `GameStatus.js` component (shows current player and game result)
- Create `ResetButton.js` component (reset functionality)

### Step 3: App Component Setup (App.js)
- Set up main game state using `useState`:
  - Board array (9 elements, initially null)
  - Current player ('X' starts)
  - Winner (null)
- Define winning combinations constant (8 combinations: 3 rows, 3 columns, 2 diagonals)
- Implement win detection function
- Implement draw detection function
- Implement reset function
- Pass necessary props to child components

### Step 4: Board Component (Board.js)
- Accept props: board state, handleCellClick function, winner
- Render 3x3 grid of Cell components
- Map over board array to create 9 Cell components
- Pass cell value, index, and click handler to each Cell

### Step 5: Cell Component (Cell.js)
- Accept props: value (X, O, or null), onClick handler, index, isWinningCell
- Render a clickable div/button
- Display X or O if cell has value
- Apply appropriate styling based on state
- Disable click if cell is occupied or game is over
- Highlight if part of winning combination

### Step 6: GameStatus Component (GameStatus.js)
- Accept props: currentPlayer, winner, isDraw
- Display current player's turn when game is active
- Display win message when there's a winner
- Display draw message when game is tied
- Apply conditional styling

### Step 7: ResetButton Component (ResetButton.js)
- Accept props: resetGame function
- Render a button that calls resetGame onClick
- Style appropriately

### Step 8: Game Logic Implementation
- **handleCellClick function**:
  - Check if cell is empty and game is active
  - Update board state with current player's mark
  - Check for win condition
  - Check for draw condition
  - Switch current player
- **checkWinner function**:
  - Loop through winning combinations
  - Check if any combination has three matching marks
  - Return winner ('X' or 'O') or null
  - Track winning cells for highlighting
- **checkDraw function**:
  - Check if all cells are filled
  - Check that there's no winner
  - Return boolean
- **resetGame function**:
  - Reset board to initial state (all nulls)
  - Reset current player to 'X'
  - Clear winner
  - Clear winning cells

### Step 9: Styling (App.css or component-specific CSS)
- Style the App container with centered layout
- Style the Board as a 3x3 grid (CSS Grid)
- Style Cell components:
  - Square shape (equal width and height)
  - Borders
  - Hover effects
  - Different colors for X and O
  - Winning cell highlight
  - Disabled state
- Style GameStatus component
- Style ResetButton component
- Add responsive design for mobile devices
- Add smooth transitions and animations

### Step 10: State Management Best Practices
- Use React hooks (useState) for component state
- Consider useEffect if needed for side effects
- Ensure immutable state updates
- Lift state up to App component
- Pass state and handlers down as props

### Step 11: UI/UX Enhancements
- Add click animations
- Add transitions when marks appear
- Prevent clicking on occupied cells
- Prevent clicking when game is over
- Add hover effects showing which player's turn
- Make reset button prominent and accessible
- Add keyboard accessibility

### Step 12: Testing
- Test all winning combinations (rows, columns, diagonals)
- Test draw scenario
- Test reset functionality
- Test invalid moves (clicking occupied cells)
- Test game flow (alternating turns)
- Test component rendering
- Test state updates
- Test on different screen sizes
- Test on different browsers

### Step 13: Code Quality & Documentation
- Add PropTypes or TypeScript for type checking (optional)
- Add comments explaining complex logic
- Use meaningful variable and function names
- Ensure code follows React best practices
- Check for any console warnings/errors
- Follow component composition principles
- Ensure proper key props in lists

## File Structure
```
/Users/LiamSebestyen/local/tictactoe/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Board.js
│   │   ├── Cell.js
│   │   ├── GameStatus.js
│   │   └── ResetButton.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── spec.md
```

## Acceptance Criteria
- ✓ Game board displays 3x3 grid
- ✓ Players can click cells to place marks
- ✓ Marks alternate between X and O
- ✓ Game detects all 8 winning combinations
- ✓ Game detects draw conditions
- ✓ Current player is clearly indicated
- ✓ Game status/results are displayed
- ✓ Reset button works correctly
- ✓ Game prevents invalid moves
- ✓ UI is responsive and user-friendly
