import React from "react";
import "./Styles/TodoSort.css";

const TodoSort = ({ sortBy, setSortBy, sortOrder, setSortOrder }) => {
    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    const toggleSortOrder = () => {
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    return (
        <div className="todo-sort">
            <label htmlFor="sort-select">Sắp xếp theo:</label>
            <select
                id="sort-select"
                className="sort-select"
                value={sortBy}
                onChange={handleSortChange}
            >
                <option value="createdAt">Thời gian tạo</option>
                <option value="dueDate">Hạn chót</option>
                <option value="completedAt">Thời gian hoàn thành</option>
                <option value="priority">Mức độ ưu tiên</option>
            </select>

            <button
                className="sort-order-toggle"
                onClick={toggleSortOrder}
                title={sortOrder === "asc" ? "Tăng dần" : "Giảm dần"}
            >
                {sortOrder === "asc" ? "↑" : "↓"}
            </button>
        </div>
    );
};

export default TodoSort;
