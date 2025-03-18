import { useState } from "react";
import "./Styles/TodoForm.css";

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        addTodo(text);

        //Reset form
        setText("");
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
        </form>
    );
};

export default TodoForm;
