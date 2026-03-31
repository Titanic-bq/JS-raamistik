# Quick Start Guide

## Getting Your App Running

### Step 1: Open Terminal
Navigate to your project folder:
```bash
cd my-react-app
```

### Step 2: Install Dependencies (if needed)
If you haven't installed dependencies yet:
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

### Step 4: Open in Browser
The terminal will show a URL (usually `http://localhost:5173`)
Open this URL in your browser.

## Testing the App

### Basic Flow
1. **Add a task**: Type "Buy groceries", select "Shopping", priority "Medium", click "Add Task"
2. **Add more tasks**: Create 3-4 tasks with different categories
3. **Complete a task**: Click the checkbox next to a task
4. **Filter tasks**: Click "Active" to see only incomplete tasks
5. **Edit a task**: Click the pencil icon, change the text, click "Save"
6. **Delete a task**: Click the trash icon, confirm deletion
7. **Filter by category**: Use the dropdown to filter by "Work" or "Personal"
8. **Check stats**: See the progress bar and task counts update

### Features to Demonstrate

#### Auto-Focus (useRef)
- Refresh the page - notice the input field is automatically focused
- After adding a task, focus returns to the input

#### State Management (useReducer)
- Add several tasks and watch the state update smoothly
- Try combining filters (Active + Work category)

#### Context API (useContext)
- All components share the same state without passing props

#### Conditional Rendering
- When no tasks exist, you see "No tasks to display"
- Completed tasks show with strikethrough and faded appearance
- Edit mode shows different UI than view mode

#### Array Operations
- Tasks are dynamically rendered from an array
- Filtering creates new arrays without mutating original

#### HTTP Simulation
- Check browser console to see simulated API calls
- Notice the brief loading state when app starts

## Common Issues & Solutions

### Issue: Port already in use
**Solution:** 
```bash
# Kill the process on that port or use a different port
npm run dev -- --port 3000
```

### Issue: Changes not showing
**Solution:**
- Make sure dev server is running
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors

### Issue: Tasks not persisting
**Solution:**
- Check browser localStorage (F12 > Application > Local Storage)
- Make sure you're using the same browser/tab

## File Structure Overview

```
my-react-app/
├── src/
│   ├── api/
│   │   └── taskApi.js              # Simulated API calls
│   ├── components/
│   │   └── TaskPlanner/
│   │       ├── TaskInput.jsx       # Add new tasks
│   │       ├── TaskItem.jsx        # Display single task
│   │       ├── TaskList.jsx        # List all tasks
│   │       ├── TaskFilter.jsx      # Filter controls
│   │       ├── TaskStats.jsx       # Statistics
│   │       └── *.css              # Component styles
│   ├── context/
│   │   └── TaskContext.jsx        # Global state
│   ├── TaskApp.jsx                # Main app
│   ├── TaskApp.css                # App styles
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Global styles
├── index.html                     # HTML template
├── TASK_PLANNER_README.md        # Full documentation
├── PRESENTATION_GUIDE.md         # Presentation help
└── package.json                  # Dependencies

```

## React Features Checklist

✅ **useState** - Form inputs, edit mode, loading state
✅ **useEffect** - Load/save data, side effects
✅ **useRef** - Auto-focus input field
✅ **useReducer** - Complex task state management
✅ **useContext** - Global state sharing
✅ **Event Handling** - Forms, buttons, keyboard
✅ **Conditional Rendering** - Empty states, completed tasks
✅ **Array Mapping** - Dynamic task list
✅ **HTTP Requests** - Simulated API in api/taskApi.js

## Tips for Your Presentation

1. **Practice the demo** - Run through it 2-3 times
2. **Have examples ready** - Know what tasks you'll add
3. **Show the code** - Open key files in your editor
4. **Explain your choices** - Why useReducer? Why Context?
5. **Be confident** - You built something real and functional!

## Need Help?

- Check `TASK_PLANNER_README.md` for detailed documentation
- Check `PRESENTATION_GUIDE.md` for presentation structure
- Review the code comments in each component
- Test each feature to understand how it works

## Before Your Presentation

- [ ] Test the app thoroughly
- [ ] Make sure all features work
- [ ] Prepare 2-3 example tasks to add
- [ ] Review the code in key files
- [ ] Practice explaining useReducer and useContext
- [ ] Time your presentation
- [ ] Have the app running before you start
- [ ] Open relevant code files in your editor

Good luck! You've got this! 🚀
