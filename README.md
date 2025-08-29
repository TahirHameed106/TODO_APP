# Todo-List

A minimal, client-side Todo app (HTML, CSS, JavaScript) with edit/update/delete and persistence using browser localStorage. Small, responsive, and easy to read/modify.

## Features
- Add tasks
- Edit task (loads into input; shows Update)
- Update task (saves edited value)
- Delete tasks
- Persistent storage via localStorage
- Responsive, centered UI (teal ↔ purple theme)

## Files
- `index.html` — UI
- `todoapp.css` — styles (variables at top for easy theming)
- `todoapp.js` — app logic (add, edit, update, delete, localStorage)
- `README.md` — this file

## Quick start (Windows)
1. Open the folder:
   cd "c:\Users\T L S\OneDrive\Desktop\TODO"
2. Start a simple HTTP server (recommended):
   - Python:
     python -m http.server 8000
     then open http://localhost:8000
   - Node (http-server):
     npx http-server -c-1

Or just double-click `index.html` to open in a browser (some features work best via a server).

## Usage
- Type a task into the input and click **Add** (or press Enter).
- Click **Edit** next to a task to load it into the input; click **Update** to save.
- Click **Delete** to remove a task.

Keyboard: pressing Enter will Add or Update depending on the current mode.

## Local storage
- Storage key: `todoItems`
- Behavior:
  - On load the app reads `todoItems` and populates the list.
  - After Add / Update / Delete the app saves the updated array back to localStorage.
- To clear saved tasks from dev tools console:
  localStorage.removeItem('todoItems')

## Important IDs / CSS hooks
If you rename elements, update the JS accordingly:
- `#todoinput` — text input
- `#add-btn` — Add button
- `#update-btn` — Update button
- `#todo-list` — list container
- `.todo-label`, `.todo-actions` — per-item layout

## Theming
Open `todoapp.css` and edit the CSS variables near the top:
- `--teal`, `--purple`, `--bg`, `--border-dark`, etc.

## Troubleshooting
- If tasks do not persist, ensure localStorage is enabled and the page is served from the same origin.
- If JSON parse errors occur, remove the `todoItems` key from localStorage and reload:
  localStorage.removeItem('todoItems')

## Contributing
Small, focused changes welcome. Keep the project plain JS/CSS/HTML and avoid adding heavy frameworks for this example.

## License
MIT