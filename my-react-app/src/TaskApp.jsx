import { useReducer, useEffect, useState, useContext } from "react";
import TaskContext from "./context/TaskContext";
import LanguageContext from "./context/LanguageContext";
import TaskInput from "./components/TaskPlanner/TaskInput";
import TaskList from "./components/TaskPlanner/TaskList";
import TaskFilter from "./components/TaskPlanner/TaskFilter";
import TaskStats from "./components/TaskPlanner/TaskStats";
import LanguageToggle from "./components/LanguageToggle";
import "./TaskApp.css";

// Initial state for useReducer
const initialState = {
  tasks: [],
  filter: "all", // all, active, completed
  categoryFilter: "all", // all, work, personal, shopping, health, other
};

// Reducer function to manage complex task state
const taskReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASKS":
      return { ...state, tasks: action.payload };
    
    case "ADD_TASK":
      return { ...state, tasks: [action.payload, ...state.tasks] };
    
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, ...action.payload.updates } : task
        ),
      };
    
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    
    case "SET_CATEGORY_FILTER":
      return { ...state, categoryFilter: action.payload };
    
    default:
      return state;
  }
};

const TaskApp = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [isLoading, setIsLoading] = useState(true);
  const { t, language } = useContext(LanguageContext);

  // Load tasks from localStorage on mount (simulating API call)
  useEffect(() => {
    const loadTasks = async () => {
      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 500));
        
        const savedTasks = localStorage.getItem("dailyTasks");
        if (savedTasks) {
          dispatch({ type: "SET_TASKS", payload: JSON.parse(savedTasks) });
        }
      } catch (error) {
        console.error("Error loading tasks:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTasks();
  }, []);

  // Save tasks to localStorage whenever they change (simulating API call)
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("dailyTasks", JSON.stringify(state.tasks));
    }
  }, [state.tasks, isLoading]);

  // Filter tasks based on completion status and category
  const getFilteredTasks = () => {
    let filtered = state.tasks;

    // Filter by completion status
    if (state.filter === "active") {
      filtered = filtered.filter((task) => !task.completed);
    } else if (state.filter === "completed") {
      filtered = filtered.filter((task) => task.completed);
    }

    // Filter by category
    if (state.categoryFilter !== "all") {
      filtered = filtered.filter((task) => task.category === state.categoryFilter);
    }

    return filtered;
  };

  const filteredTasks = getFilteredTasks();

  if (isLoading) {
    return (
      <div className="task-app">
        <div className="loading">{t.loading}</div>
      </div>
    );
  }

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      <div className="task-app">
        <header className="task-header">
          <h1>{t.appTitle}</h1>
          <p className="task-date">{new Date().toLocaleDateString(language === "et" ? "et-EE" : "en-US", t.dateOptions)}</p>
        </header>

        <LanguageToggle />
        <TaskStats tasks={state.tasks} />
        <TaskInput />
        <TaskFilter />
        <TaskList tasks={filteredTasks} />
      </div>
    </TaskContext.Provider>
  );
};

export default TaskApp;
