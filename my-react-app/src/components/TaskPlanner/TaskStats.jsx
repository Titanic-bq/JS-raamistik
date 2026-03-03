import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import "./TaskStats.css";

const TaskStats = ({ tasks }) => {
  const { t } = useContext(LanguageContext);
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const activeTasks = totalTasks - completedTasks;
  
  // Calculate completion percentage
  const completionPercentage = totalTasks > 0 
    ? Math.round((completedTasks / totalTasks) * 100) 
    : 0;

  return (
    <div className="task-stats">
      <div className="stat-card">
        <div className="stat-value">{totalTasks}</div>
        <div className="stat-label">{t.totalTasks}</div>
      </div>
      <div className="stat-card">
        <div className="stat-value">{activeTasks}</div>
        <div className="stat-label">{t.activeTasks}</div>
      </div>
      <div className="stat-card">
        <div className="stat-value">{completedTasks}</div>
        <div className="stat-label">{t.completedTasks}</div>
      </div>
      <div className="stat-card progress-card">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
        <div className="stat-label">{completionPercentage}{t.percentComplete}</div>
      </div>
    </div>
  );
};

export default TaskStats;
