import "./Styles/TodoItem.css";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <li className="todo-item">
            <div className="todo-content">
                {/* tí nữa xóa */}
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                />

                <span
                    className={`todo-text ${todo.completed ? "completed" : ""}`}
                >
                    {todo.text}
                </span>
            </div>
            <div className="todo-actions">
                <button
                    className="todo-delete"
                    onClick={() => deleteTodo(todo.id)}
                >
                    Xóa
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
