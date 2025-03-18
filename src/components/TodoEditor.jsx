import React, { useEffect, useState } from "react";
import "./Styles/TodoEditor.css";

const TodoEditor = ({ todo, onSave, onCancel }) => {
    const [text, setText] = useState(todo.text);
    const [dueDate, setDueDate] = useState(
        todo.dueDate ? new Date(todo.dueDate).toISOString().slice(0, 16) : ""
    );
    const [priority, setPriority] = useState(todo.priority || "medium");

    useEffect(() => {
        // Đặt focus vào input text khi component được render
        document.getElementById("edit-todo-text").focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        onSave({
            text: text.trim(),
            dueDate: dueDate ? new Date(dueDate).toISOString() : null,
            priority,
        });
    };

    return (
        <form className="todo-editor" onSubmit={handleSubmit}>
            <div className="edit-group">
                <label htmlFor="edit-todo-text">Nội dung:</label>
                <input
                    id="edit-todo-text"
                    className="edit-input"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Nhập nội dung công việc"
                />
            </div>

            <div className="edit-group">
                <label htmlFor="edit-todo-due">Hạn chót:</label>
                <input
                    id="edit-todo-due"
                    className="edit-input"
                    type="datetime-local"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
            </div>

            <div className="edit-group">
                <label htmlFor="edit-todo-priority">Mức độ ưu tiên:</label>
                <select
                    id="edit-todo-priority"
                    className="edit-select"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="low">Thấp</option>
                    <option value="medium">Trung bình</option>
                    <option value="high">Cao</option>
                </select>
            </div>

            <div className="edit-actions">
                <button
                    type="button"
                    className="edit-cancel"
                    onClick={onCancel}
                >
                    Hủy
                </button>
                <button
                    type="submit"
                    className="edit-save"
                    disabled={!text.trim()}
                >
                    Lưu
                </button>
            </div>
        </form>
    );
};

export default TodoEditor;
