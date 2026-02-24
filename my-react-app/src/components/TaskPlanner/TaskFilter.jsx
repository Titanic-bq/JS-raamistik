import { useContext } from "react";
import TaskContext from "../../context/TaskContext";
import LanguageContext from "../../context/LanguageContext";
import "./TaskFilter.css";

const TaskFilter = () => {
  const { state, dispatch } = useContext(TaskContext);
  const { t } = useContext(LanguageContext);

  const handleFilterChange = (filter) => {
    dispatch({ type: "SET_FILTER", payload: filter });
  };

  const handleCategoryChange = (category) => {
    dispatch({ type: "SET_CATEGORY_FILTER", payload: category });
  };

  return (
    <div className="task-filter">
      <div className="filter-group">
        <label>{t.filterShow}</label>
        <div className="filter-buttons">
          <button
            className={state.filter === "all" ? "active" : ""}
            onClick={() => handleFilterChange("all")}
          >
            {t.filterAll}
          </button>
          <button
            className={state.filter === "active" ? "active" : ""}
            onClick={() => handleFilterChange("active")}
          >
            {t.filterActive}
          </button>
          <button
            className={state.filter === "completed" ? "active" : ""}
            onClick={() => handleFilterChange("completed")}
          >
            {t.filterCompleted}
          </button>
        </div>
      </div>

      <div className="filter-group">
        <label>{t.filterCategory}</label>
        <select
          value={state.categoryFilter}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="category-select"
        >
          <option value="all">{t.allCategories}</option>
          <option value="work">{t.categories.work}</option>
          <option value="personal">{t.categories.personal}</option>
          <option value="shopping">{t.categories.shopping}</option>
          <option value="health">{t.categories.health}</option>
          <option value="other">{t.categories.other}</option>
        </select>
      </div>
    </div>
  );
};

export default TaskFilter;
