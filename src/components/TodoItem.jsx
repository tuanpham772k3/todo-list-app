import { useState } from "react";
import "./Styles/TodoItem.css";
import todoService from "../services/todoService";
import TodoEditor from "./TodoEditor";

const TodoItem = ({ todo, deleteTodo, editTodo }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = (updates) => {
        editTodo(todo.id, updates);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const getPriorityClass = () => {
        return `priority-${todo.priority || "medium"}`;
    };

    const isOverdue = todoService.isOverdue(todo);

    if (isEditing) {
        return (
            <li className={`todo-item ${getPriorityClass()}`}>
                <TodoEditor
                    todo={todo}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
            </li>
        );
    }

    return (
        <li
            className={`todo-item ${getPriorityClass()} ${isOverdue ? "overdue" : ""}`}
        >
            <div className="todo-content">
                <span
                    className={`todo-text ${todo.completed ? "completed" : ""}`}
                >
                    {todo.text}
                </span>

                <div className="todo-details">
                    {todo.dueDate && (
                        <span
                            className={`todo-due ${isOverdue ? "overdue" : ""}`}
                        >
                            Hạn chót: {todoService.formatDate(todo.dueDate)}
                        </span>
                    )}

                    {todo.priority && (
                        <span className="todo-priority">
                            {todo.priority === "high" && "⚠️ Cao"}
                            {todo.priority === "medium" && "⚡ Trung bình"}
                            {todo.priority === "low" && "🔵 Thấp"}
                        </span>
                    )}
                </div>
            </div>
            <div className="todo-actions">
                <button className="todo-edit" onClick={handleEdit}>
                    Sửa
                </button>
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
