# Simple Todo App

Minimal, client-side Todo application (HTML, CSS, JavaScript).

## Overview
A small todo app with:
- Add tasks
- Edit task (loads task into input, shows Update)
- Update task (saves edited value)
- Delete tasks
- Responsive, centered UI with teal ↔ purple theme

## Files
- `index.html` — app UI
- `todoapp.css` — styles (responsive)
- `todoapp.js` — logic (add, edit, update, delete)

## Quick start

Open the app:
- Double-click `index.html` in the project folder, or
- Run a local server (recommended for consistent behavior):

## How it works (notes for editing)
- `Todolist()` — validates and adds a new task to `todoarr`.
- `TodoShow()` — renders tasks into `#todo-list`. Each item uses:
  - `<span class="todo-label">` for text
  - `.todo-actions` container with Edit/Delete buttons aligned to the right (CSS flex + `margin-left: auto`).
- `TodoEdit(index)` — loads task text into `#todoinput`, sets `editIndex`, hides Add button and shows Update button.
- `updateTask()` — validates input, runs `todoarr.splice(editIndex, 1, newValue)`, resets UI to Add mode.
- `Tododelete(index)` — removes item and updates `editIndex` if needed.

IDs used in HTML/JS:
- `#todoinput`, `#add-btn`, `#update-btn`, `#todo-list`

If you rename IDs in HTML, update the JS accordingly.

## Styling
- Edit `todoapp.css` variables at the top (`--teal`, `--purple`, `--bg`, `--border-dark`) to tweak colors and borders.

## Contributing
Small fixes and improvements welcome. Keep code minimal and avoid heavy frameworks.

## License
MIT
```// filepath: c:\Users\OneDrive\Desktop\TODO\README.md
# Simple Todo App

Minimal, client-side Todo application (HTML, CSS, JavaScript).

## Overview
A small todo app with:
- Add tasks
- Edit task (loads task into input, shows Update)
- Update task (saves edited value)
- Delete tasks
- Responsive, centered UI with teal ↔ purple theme

## Files
- `index.html` — app UI
- `todoapp.css` — styles (responsive)
- `todoapp.js` — logic (add, edit, update, delete)

## Quick start

Open the app:
- Double-click `index.html` in the project folder, or
- Run a local server (recommended for consistent behavior):

Windows (PowerShell / CMD):
```bash
cd "c:\Users\OneDrive\Desktop\TODO"
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

or with Node:
```bash
cd "c:\Users\OneDrive\Desktop\TODO"
npx http-server -c-1
```

## How it works (notes for editing)
- `Todolist()` — validates and adds a new task to `todoarr`.
- `TodoShow()` — renders tasks into `#todo-list`. Each item uses:
  - `<span class="todo-label">` for text
  - `.todo-actions` container with Edit/Delete buttons aligned to the right (CSS flex + `margin-left: auto`).
- `TodoEdit(index)` — loads task text into `#todoinput`, sets `editIndex`, hides Add button and shows Update button.
- `updateTask()` — validates input, runs `todoarr.splice(editIndex, 1, newValue)`, resets UI to Add mode.
- `Tododelete(index)` — removes item and updates `editIndex` if needed.

IDs used in HTML/JS:
- `#todoinput`, `#add-btn`, `#update-btn`, `#todo-list`

If you rename IDs in HTML, update the JS accordingly.

## Styling
- Edit `todoapp.css` variables at the top (`--teal`, `--purple`, `--bg`, `--border-dark`) to tweak colors and borders.

## Contributing
Small fixes and improvements welcome. Keep code minimal and