# French Made Simple

## Project Description

French Made Simple is a beginner friendly React app for learning basic French sentence formation and grammar.

The app uses local flashcard data to show English phrases first, then lets the user tap a card to reveal the French translation. Users can study sentence formation levels or grammar topics, search through the available lessons, and practice one flashcard at a time.

## Setup Instructions

1. Install the project dependencies:

```bash
npm install
```

2. Start the Expo development server:

```bash
npx expo start
```

3. Open the app:

- Press `a` to open on an Android emulator.
- Or scan the QR code using Expo Go on a physical phone, make sure to install Expo Go before doing this

## API Used

No external API is used in this project.

The app uses local data files:

- `data/course1.json`
- `data/course2.json`
- `data/grammarTopics.js`

These files store the English and French flashcard content used by the app.

## Features Implemented

- Home screen with two learning options:
  - Learn Sentence Formation
  - Learn Grammar
- Sentence Formation screen that displays levels from local JSON data.
- Grammar Topics screen that displays grammar topics from a local data file.
- Practice screen that shows one flashcard at a time.
- Tap-to-flip flashcards to reveal the French translation.
- Previous and next arrow controls for moving through cards.
- Left and right side arrow controls for easier one-handed use.
- Search/filtering using `TextInput`.
- Navigation using Expo Router.
- Passing route parameters between screens.
- `FlatList` used to display sentence levels and grammar topics.
- `ActivityIndicator` used while loading data.
- `Pressable` used for buttons, cards, and flashcard actions.
- Reusable `LevelCard` component.
- Organized project structure with separate folders for screens, components, data, and helper functions.

## Stretch Goals Completed

- Search and filtering for sentence levels and grammar topics.
- Better UI design for the Practice screen.
- One-handed navigation controls using arrows on both sides of the flashcard.


## Main Screens

1. Home Screen
2. Sentence Formation Levels Screen
3. Grammar Topics Screen
4. Practice Screen
