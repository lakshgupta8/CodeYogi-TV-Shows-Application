# TV SHOWS Discovery App

A show discovery application built with a focus on robust state management. Designed with a sleek **Gray-Amber** aesthetic.

## Features

- **Intelligent Search**: Real-time show discovery powered by the TVMaze API.
- **Show Details**: Deep insights into every show, featuring rich summaries, ratings, and high-quality artwork.
- **Cast Visualization**:
  - **Avatar Stacks**: Overlapping circular avatars for a compact and premium look.
  - **Interactive Popovers**: Clickable "Remaining Cast" indicators that reveal the full actor list without page shifts.
  - **Tooltips**: Detailed actor/character information on hover.
- **Centralized Design System**: Scalable color palette and utility sets defined via Tailwind CSS `@theme` tokens.
- **Advanced State Management**: Industrial-grade architecture using Redux for state consistency and Redux Saga for complex asynchronous side effects.
- **Robust Error Handling**: Elegant handling of missing data, 404s, and loading states to ensure a smooth user journey.

## Tech Stack

- **Core**: React 18, TypeScript
- **State Management**: Redux, Redux Saga, Reselect (for optimized selectors)
- **Styling**: Tailwind CSS v4 (with custom `@theme` tokens)
- **Networking**: Axios
- **Parsing**: `html-react-parser` for HTML content
- **API**: [TVMaze API](https://www.tvmaze.com/api)

## Project Architecture

```bash
src/
├── Actions/        # Redux action creators
├── Components/     # Reusable UI components (CastGroup, SearchBar, etc.)
├── Models/         # TypeScript interfaces and types
├── Pages/          # Main application screens (List, Details)
├── Reducers/       # Redux state logic with Immer
├── Sagas/          # Side effect management
├── Selectors/      # Memoized state selectors
├── api.ts          # API client configuration
└── index.css       # Global styles and Design System tokens
```

## Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- [Bun](https://bun.sh/) or npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/lakshgupta8/CodeYogi-TV-Shows-Application.git
   ```

2. Install dependencies:

   ```bash
   bun install
   # or
   npm install
   ```

3. Fire up the development server:

   ```bash
   bun dev
   ```

---

Developed as part of the Advanced **CodeYogi** Course.
