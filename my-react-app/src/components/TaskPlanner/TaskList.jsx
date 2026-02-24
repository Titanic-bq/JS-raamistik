import { useContext } from "react";
import TaskItem from "./TaskItem";
import LanguageContext from "../../context/LanguageContext";
import "./TaskList.css";

const TaskList = ({ tasks }) => {
  const { t } = useContext(LanguageContext);
  
  // Conditional rendering: Show message if no tasks match the filter
  if (tasks.length === 0) {
    return (
      <div className="task-list-empty">
        <p>{t.emptyState}</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {/* Map through tasks array and render each task */}
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
