# React Todo App (Retro Theme)

This repository contains a simple React Todo application that lets users add, search, complete, and delete todo items with a clean “retro” inspired UI and a light/dark theme toggle.

The React frontend lives in:

- `simple-todo-list-243393-243407/todo_frontend`

## Features

This app currently implements the following functionality in the frontend:

- Users can add new todos from a form with basic validation.
- Users can mark todos complete or incomplete.
- Users can delete todos.
- Users can search/filter todos by text.
- Users can toggle between light and dark theme.
- The UI shows counts for remaining todos and how many are currently shown by the search filter.
- The app is fully client-side and stores todos in React state (there is no backend persistence in the current code).

## Prerequisites

You will need:

- Node.js (LTS recommended)
- npm (comes with Node)

## Setup

1. Navigate to the frontend container:

   ```bash
   cd simple-todo-list-243393-243407/todo_frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Running the app (development)

From `simple-todo-list-243393-243407/todo_frontend`:

```bash
npm start
```

By default, Create React App serves the app on:

- http://localhost:3000

If your environment sets a different port, the app will use that.

## Usage instructions

When the app is running:

1. Add a todo by typing in the “What needs doing?” field and pressing **Add** (or pressing Enter).
2. Search todos using the “Search todos…” field to filter the list by text.
3. Mark a todo complete/incomplete using either:
   - The checkbox on the left of the item, or
   - The “Done/Undo” button on the right.
4. Delete a todo using the “Delete” button.
5. Toggle light/dark theme using the theme button in the header.

## Available scripts

All scripts below are run from `simple-todo-list-243393-243407/todo_frontend`:

### `npm start`

Runs the app in development mode.

### `npm test`

Runs the test runner (Create React App / react-scripts).

### `npm run build`

Builds the production bundle into the `build/` directory.

### `npm run eject`

Ejects from Create React App (irreversible). Most projects should not need this.

## Environment variables

This repository’s container environment includes several `REACT_APP_*` variables (as is typical for Create React App). The current frontend implementation does not require these variables to run, but they may be used for future API or runtime configuration.

Common variables you may see in the environment include:

- `REACT_APP_API_BASE`
- `REACT_APP_BACKEND_URL`
- `REACT_APP_FRONTEND_URL`
- `REACT_APP_WS_URL`
- `REACT_APP_NODE_ENV`
- `REACT_APP_ENABLE_SOURCE_MAPS`
- `REACT_APP_PORT`
- `REACT_APP_LOG_LEVEL`
- `REACT_APP_HEALTHCHECK_PATH`
- `REACT_APP_FEATURE_FLAGS`
- `REACT_APP_EXPERIMENTS_ENABLED`

If you add an `.env` file, remember that Create React App only exposes variables prefixed with `REACT_APP_` to the browser build.

## Project structure (high level)

- `todo_frontend/src/App.js` contains the main application state (todos, search query, theme).
- `todo_frontend/src/components/` contains UI components:
  - `TodoHeader` (title + theme toggle)
  - `TodoForm` (add-todo form + validation)
  - `TodoSearch` (search input)
  - `TodoItem` (render/toggle/delete a todo)
  - `components/ui/*` (small reusable UI building blocks)

## Notes and limitations

This is a frontend-only app. Todos are seeded in memory on first load and are not persisted across refreshes in the current implementation.

Task completed: Added a complete repository README with setup steps, features, and usage instructions for the React Todo app.
