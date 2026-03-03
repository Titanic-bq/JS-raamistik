import { useState, useContext } from "react";
import TaskContext from "../../context/TaskContext";
import LanguageContext from "../../context/LanguageContext";
import "./TaskItem.css";

const TaskItem = ({ task }) => {
  const { dispatch } = useContext(TaskContext);
  const { t } = useContext(LanguageContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleToggle = () => {
    dispatch({ type: "TOGGLE_TASK", payload: task.id });
  };

  const handleDelete = () => {
    if (window.confirm(t.deleteConfirm)) {
      dispatch({ type: "DELETE_TASK", payload: task.id });
    }
  };

  const handleEdit = () => {
    if (editText.trim() === "") {
      alert(t.emptyTaskAlert);
      return;
    }

    dispatch({
      type: "EDIT_TASK",
      payload: {
        id: task.id,
        updates: { text: editText.trim() },
      },
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(task.text);
    setIsEditing(false);
  };

  // Get category icon based on task category
  const getCategoryIcon = () => {
    switch (task.category) {
      case "work":
        return "💼";
      case "personal":
        return "👤";
      case "shopping":
        return "🛒";
      case "health":
        return "❤️";
      default:
        return "📝";
    }
  };

  // Get priority color class
  const getPriorityClass = () => {
    return `priority-${task.priority}`;
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""} ${getPriorityClass()}`}>
      <div className="task-checkbox">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
          id={`task-${task.id}`}
        />
        <label htmlFor={`task-${task.id}`}></label>
      </div>

      <div className="task-content">
        {isEditing ? (
          <div className="task-edit">
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="task-edit-input"
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") handleEdit();
                if (e.key === "Escape") handleCancel();
              }}
            />
            <div className="task-edit-actions">
              <button onClick={handleEdit} className="btn-save">
                {t.saveButton}
              </button>
              <button onClick={handleCancel} className="btn-cancel">
                {t.cancelButton}
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="task-info">
              <span className="task-category-icon">{getCategoryIcon()}</span>
              <span className="task-text">{task.text}</span>
            </div>
            <div className="task-meta">
              <span className="task-category">{t.categories[task.category]}</span>
              <span className="task-priority">{t.priorities[task.priority]} {t.priorityLabel}</span>
            </div>
          </>
        )}
      </div>

      {!isEditing && (
        <div className="task-actions">
          <button
            onClick={() => setIsEditing(true)}
            className="btn-edit"
            title={t.editTask}
            disabled={task.completed}
          >
            ✏️
          </button>
          <button
            onClick={handleDelete}
            className="btn-delete"
            title={t.deleteTask}
          >
            🗑️
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
