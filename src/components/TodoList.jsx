import "./Styles/TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
    return (
        <div className="todo-list-container">
            {todos.length > 0 && (
                <div className="todo-count">
                    {todos.filter((todo) => todo.completed).length}/
                    {todos.length} hoàn thành
                </div>
            )}

            <ul className="todo-list">
                {todos.length === 0 ? (
                    <p className="empty-list">Không có công việc nào!</p>
                ) : (
                    todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            toggleTodo={toggleTodo}
                            deleteTodo={deleteTodo}
                        />
                    ))
                )}
            </ul>
        </div>
    );
};

export default TodoList;
