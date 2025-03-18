import { useState } from "react";
import "./Styles/TodoForm.css";

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [priority, setPriority] = useState("medium");
    const [showAdvanced, setShowAdvanced] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        addTodo(text, dueDate || null, priority);

        // Reset form
        setText("");
        setDueDate("");
        setPriority("medium");
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <input
                    className="todo-input"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Thêm công việc mới..."
                />
                <button
                    className="todo-submit"
                    type="submit"
                    disabled={!text.trim()}
                >
                    Thêm
                </button>
            </div>

            <div className="form-advanced-toggle">
                <button
                    type="button"
                    className="toggle-button"
                    onClick={() => setShowAdvanced(!showAdvanced)}
                >
                    {showAdvanced ? "Ẩn tùy chọn" : "Hiện tùy chọn"}
                </button>
            </div>

            {showAdvanced && (
                <div className="form-advanced">
                    <div className="form-group">
                        <label htmlFor="todo-due-date">Hạn chót:</label>
                        <input
                            id="todo-due-date"
                            className="todo-date-input"
                            type="datetime-local"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="todo-priority">Mức độ ưu tiên:</label>
                        <select
                            id="todo-priority"
                            className="todo-priority-select"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                        >
                            <option value="low">Thấp</option>
                            <option value="medium">Trung bình</option>
                            <option value="high">Cao</option>
                        </select>
                    </div>
                </div>
            )}
        </form>
    );
};

export default TodoForm;
