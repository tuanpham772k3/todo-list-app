import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import useTodos from "./hooks/useTodos";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

function App() {
    const { addTodo, todos, toggleTodo, deleteTodo, filter, setFilter } =
        useTodos();
    return (
        <div className="todo-app">
            <header className="app-header">
                <h1 className="app-title">Quản lý công việc</h1>
                <p className="app-subtitle">
                    Thêm, hoàn thành và quản lý các công việc của bạn
                </p>
            </header>

            <TodoForm addTodo={addTodo} />

            <div className="todo-controls">
                <TodoFilter filter={filter} setFilter={setFilter} />
            </div>

            <TodoList
                todos={todos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
        </div>
    );
}

export default App;
