# Tic Tac Toe - Visual Design Reference

## Color Scheme

### Main Theme
- **Background Gradient**: Purple gradient (from #667eea to #764ba2)
- **Container**: White background with rounded corners
- **Title**: Gradient text effect matching background

### Game Elements
- **Player X**: Red (#e74c3c)
- **Player O**: Blue (#3498db)
- **Winning Cells**: Green (#2ecc71)
- **Cell Background**: Light gray (#ecf0f1)
- **Cell Border**: Dark blue-gray (#2c3e50)

### Status Messages
- **X's Turn**: Red background (#fadbd8) with red text
- **O's Turn**: Blue background (#d6eaf8) with blue text
- **Winner**: Green background (#d5f4e6) with green text
- **Draw**: Yellow background (#fef5e7) with orange text

## Layout Structure

```
┌─────────────────────────────────────┐
│                                     │
│         TIC TAC TOE                 │  <- Title (gradient text)
│                                     │
│    ┌─────────────────────────┐    │
│    │  Current Player: X      │    │  <- Game Status (color-coded)
│    └─────────────────────────┘    │
│                                     │
│    ┌───────┬───────┬───────┐      │
│    │       │       │       │      │
│    │   X   │   O   │       │      │  <- Game Board (3x3 grid)
│    │       │       │       │      │
│    ├───────┼───────┼───────┤      │
│    │       │       │       │      │
│    │   O   │   X   │       │      │
│    │       │       │       │      │
│    ├───────┼───────┼───────┤      │
│    │       │       │       │      │
│    │       │       │   X   │      │
│    │       │       │       │      │
│    └───────┴───────┴───────┘      │
│                                     │
│        ┌─────────────┐             │
│        │ 🔄 New Game │             │  <- Reset Button
│        └─────────────┘             │
│                                     │
└─────────────────────────────────────┘
```

## Animations

### Cell Pop-In (when placing X or O)
```
0%   → Scale: 0 (invisible)
50%  → Scale: 1.2 (slightly larger)
100% → Scale: 1 (normal size)
```

### Winning Cell Pulse
```
0%, 100% → Scale: 1 (normal)
50%      → Scale: 1.05 (slightly larger)
```
Repeats infinitely with green background

### Status Message Celebrate (when someone wins)
```
0%, 100% → Scale: 1, Rotation: 0deg
25%      → Scale: 1.1, Rotation: -2deg
75%      → Scale: 1.1, Rotation: 2deg
```

### Hover Effects
- **Cell Hover**: Scale up 5%, add shadow, change background
- **Reset Button Hover**: Darken color, move up 2px, enhance shadow
- **Reset Button Click**: Move back down, reduce shadow

## Responsive Breakpoints

### Mobile (max-width: 480px)
- Board width: 250px (from 300px)
- Gap between cells: 8px (from 10px)
- Cell font size: 2rem (from 2.5rem)
- Title font size: 2rem (from 3rem)
- Status font size: 1.4rem (from 1.8rem)
- Button font size: 1rem (from 1.2rem)
- Container padding: 25px (from 40px)

### Desktop (default)
- Board width: 300px
- Gap between cells: 10px
- All elements at full size

## Typography

- **Title**: 3rem, uppercase, bold, letter-spacing: 2px
- **Game Status**: 1.8rem, bold
- **Cell Content**: 2.5rem, bold
- **Reset Button**: 1.2rem, bold
- **Font Family**: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif

## User Experience Details

### Visual Feedback
1. **Empty cells**: Show hover effect when game is active
2. **Occupied cells**: No hover effect, cursor not-allowed
3. **Current player**: Status box changes color based on whose turn
4. **Winning combination**: Three cells pulse with green background
5. **Game over**: All cells become unclickable

### Accessibility
- All interactive elements are keyboard accessible
- Buttons have proper focus states
- Color contrast meets WCAG standards
- Touch targets are large enough for mobile (minimum 44px)

### Smooth Transitions
- All state changes animated with CSS transitions (0.3s ease)
- Marks appear with pop-in animation
- Winning cells pulse continuously
- Hover effects are smooth

## Component Responsibilities

### Visual Hierarchy
1. **Title** - Grabs attention with gradient effect
2. **Status** - Always visible, color-coded for quick understanding
3. **Board** - Central focus, clear grid layout
4. **Reset Button** - Prominent but not distracting

### Information Architecture
- Top: Branding (Title)
- Middle-Top: Current state (Status)
- Center: Interaction area (Board)
- Bottom: Action (Reset Button)

This layout ensures users always know:
- What game they're playing (Title)
- What's happening (Status)
- Where to interact (Board)
- How to start over (Reset Button)
