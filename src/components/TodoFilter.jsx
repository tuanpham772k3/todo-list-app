import "./Styles/TodoFilter.css";

const TodoFilter = ({ filter, setFilter, allTodos }) => {
    // Đếm số lượng công việc theo trạng thái
    const counts = {
        all: allTodos.length,
        active: allTodos.filter((todo) => !todo.completed).length,
        completed: allTodos.filter((todo) => todo.completed).length,
        overdue: allTodos.filter(
            (todo) =>
                !todo.completed &&
                todo.dueDate &&
                new Date(todo.dueDate) < new Date()
        ).length,
        upcoming: allTodos.filter(
            (todo) =>
                !todo.completed &&
                todo.dueDate &&
                new Date(todo.dueDate) >= new Date()
        ).length,
    };

    return (
        <div className="todo-filter">
            <button
                onClick={() => setFilter("all")}
                className={`filter-button ${filter === "all" ? "active" : ""}`}
            >
                Tất cả
                <span className="filter-count">{counts.all}</span>
            </button>
            <button
                onClick={() => setFilter("active")}
                className={`filter-button ${filter === "active" ? "active" : ""}`}
            >
                Đang làm
                <span className="filter-count">{counts.active}</span>
            </button>
            <button
                onClick={() => setFilter("completed")}
                className={`filter-button ${filter === "completed" ? "active" : ""}`}
            >
                Hoàn thành
                <span className="filter-count">{counts.completed}</span>
            </button>
            <button
                onClick={() => setFilter("overdue")}
                className={`filter-button ${filter === "overdue" ? "active" : ""}`}
            >
                Quá hạn
                <span className="filter-count">{counts.overdue}</span>
            </button>
            <button
                onClick={() => setFilter("upcoming")}
                className={`filter-button ${filter === "upcoming" ? "active" : ""}`}
            >
                Sắp đến hạn
                <span className="filter-count">{counts.upcoming}</span>
            </button>
        </div>
    );
};

export default TodoFilter;
