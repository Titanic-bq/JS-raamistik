import { useState, useRef, useEffect, useContext } from "react";
import TaskContext from "../../context/TaskContext";
import LanguageContext from "../../context/LanguageContext";
import "./TaskInput.css";

const TaskInput = () => {
  const { dispatch } = useContext(TaskContext);
  const { t } = useContext(LanguageContext);
  const [taskText, setTaskText] = useState("");
  const [category, setCategory] = useState("personal");
  const [priority, setPriority] = useState("medium");
  const inputRef = useRef(null);

  // Auto-focus the input field when component mounts using useRef
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input
    if (taskText.trim() === "") {
      alert(t.emptyTaskAlert);
      return;
    }

    // Create new task object
    const newTask = {
      id: Date.now().toString(),
      text: taskText.trim(),
      category,
      priority,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    // Dispatch action to add task
    dispatch({ type: "ADD_TASK", payload: newTask });

    // Reset form
    setTaskText("");
    setCategory("personal");
    setPriority("medium");
    inputRef.current.focus();
  };

  return (
    <form className="task-input-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          ref={inputRef}
          type="text"
          className="task-input"
          placeholder={t.inputPlaceholder}
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          maxLength={100}
        />
      </div>

      <div className="task-options">
        <div className="option-group">
          <label htmlFor="category">{t.categoryLabel}</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="task-select"
          >
            <option value="work">{t.categories.work}</option>
            <option value="personal">{t.categories.personal}</option>
            <option value="shopping">{t.categories.shopping}</option>
            <option value="health">{t.categories.health}</option>
            <option value="other">{t.categories.other}</option>
          </select>
        </div>

        <div className="option-group">
          <label htmlFor="priority">{t.priorityLabel}</label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="task-select"
          >
            <option value="low">{t.priorities.low}</option>
            <option value="medium">{t.priorities.medium}</option>
            <option value="high">{t.priorities.high}</option>
          </select>
        </div>

        <button type="submit" className="add-task-btn">
          {t.addTaskButton}
        </button>
      </div>
    </form>
  );
};

export default TaskInput;
