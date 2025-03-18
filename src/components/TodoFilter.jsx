import "./Styles/TodoFilter.css";

const TodoFilter = ({ filter, setFilter }) => {
    // Đếm số lượng công việc theo trạng thái
    // const counts = {
    //     all: todos.length,
    //     active: todos.filter((todo) => !todo.completed).length,
    //     completed: todos.filter((todo) => todo.completed).length,
    // };

    return (
        <div className="todo-filter">
            <button
                onClick={() => setFilter("all")}
                className={`filter-button ${filter === "all" ? "active" : ""}`}
            >
                Tất cả
                {/* <span className="filter-count">{counts.all}</span> */}
            </button>
            <button
                onClick={() => setFilter("active")}
                className={`filter-button ${filter === "active" ? "active" : ""}`}
            >
                Đang làm
                {/* <span className="filter-count">{counts.active}</span> */}
            </button>
            <button
                onClick={() => setFilter("completed")}
                className={`filter-button ${filter === "completed" ? "active" : ""}`}
            >
                Hoàn thành
                {/* <span className="filter-count">{counts.completed}</span> */}
            </button>
        </div>
    );
};

export default TodoFilter;
