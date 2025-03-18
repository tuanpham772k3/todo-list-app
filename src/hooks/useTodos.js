import { useEffect, useState } from "react";
import todoService from "../services/todoService";

const useTodos = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");

    //Lấy danh sách todos mỗi khi component được render lần đầu tiên
    useEffect(() => {
        setTodos(todoService.getAll());
    }, []);

    // Tạo mới todo
    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text,
            completed: false,
            createdAt: new Date(),
        };
        setTodos([...todos, newTodo]);
    };

    //Chuyển đổi trạng thái completed
    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    const completed = !todo.completed;
                    return {
                        ...todo,
                        completed,
                    };
                }
                return todo;
            })
        );
    };

    //Xóa todo: filter tạo mảng mới với các phần tử thõa điều kiện
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    //dùng filter để lọc danh sách công việc đã hoàn thành chưa
    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    });

    return {
        todos: filteredTodos,
        addTodo,
        toggleTodo,
        deleteTodo,
        filter,
        setFilter,
    };
};

export default useTodos;
