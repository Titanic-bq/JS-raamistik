import { createContext } from "react";

// Create context for sharing task state globally across components
const TaskContext = createContext({
  state: {
    tasks: [],
    filter: "all",
    categoryFilter: "all",
  },
  dispatch: () => {},
});

export default TaskContext;
