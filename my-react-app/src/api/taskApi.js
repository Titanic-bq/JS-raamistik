/**
 * Task API Module
 * Simulates HTTP requests for task management
 * In a real application, these would be actual fetch/axios calls to a backend
 */

const API_DELAY = 300; // Simulate network delay

// Simulate API endpoint for fetching tasks
export const fetchTasks = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const tasks = localStorage.getItem("dailyTasks");
      resolve(tasks ? JSON.parse(tasks) : []);
    }, API_DELAY);
  });
};

// Simulate API endpoint for creating a task
export const createTask = async (taskData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const tasks = JSON.parse(localStorage.getItem("dailyTasks") || "[]");
      const newTask = {
        id: Date.now().toString(),
        ...taskData,
        createdAt: new Date().toISOString(),
      };
      tasks.unshift(newTask);
      localStorage.setItem("dailyTasks", JSON.stringify(tasks));
      resolve(newTask);
    }, API_DELAY);
  });
};

// Simulate API endpoint for updating a task
export const updateTask = async (taskId, updates) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const tasks = JSON.parse(localStorage.getItem("dailyTasks") || "[]");
      const updatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, ...updates } : task
      );
      localStorage.setItem("dailyTasks", JSON.stringify(updatedTasks));
      resolve(updatedTasks.find((t) => t.id === taskId));
    }, API_DELAY);
  });
};

// Simulate API endpoint for deleting a task
export const deleteTask = async (taskId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const tasks = JSON.parse(localStorage.getItem("dailyTasks") || "[]");
      const filteredTasks = tasks.filter((task) => task.id !== taskId);
      localStorage.setItem("dailyTasks", JSON.stringify(filteredTasks));
      resolve({ success: true });
    }, API_DELAY);
  });
};

// Simulate fetching tasks from an external API (example with JSONPlaceholder)
export const fetchExternalTasks = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
    const data = await response.json();
    
    // Transform external data to our task format
    return data.map((item) => ({
      id: item.id.toString(),
      text: item.title,
      category: "personal",
      priority: "medium",
      completed: item.completed,
      createdAt: new Date().toISOString(),
    }));
  } catch (error) {
    console.error("Error fetching external tasks:", error);
    return [];
  }
};
