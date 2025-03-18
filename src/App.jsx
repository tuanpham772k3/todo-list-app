import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import useTodos from "./hooks/useTodos";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import TodoSort from "./components/TodoSort";

function App() {
    const {
        todos,
        allTodos,
        addTodo,
        toggleTodo,
        deleteTodo,
        editTodo,
        filter,
        setFilter,
        sortBy,
        setSortBy,
        sortOrder,
        setSortOrder,
    } = useTodos();

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
                <TodoFilter
                    filter={filter}
                    setFilter={setFilter}
                    allTodos={allTodos}
                />
                <TodoSort
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    sortOrder={sortOrder}
                    setSortOrder={setSortOrder}
                />
            </div>

            <TodoList
                todos={todos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
            />
        </div>
    );
}

export default App;
