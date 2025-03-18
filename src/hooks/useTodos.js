import { useEffect, useRef, useState } from "react";
import todoService from "../services/todoService";

const useTodos = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");
    const [sortBy, setSortBy] = useState("createdAt"); // 'createdAt', 'dueDate', 'priority'
    const [sortOrder, setSortOrder] = useState("desc"); // 'asc', 'desc'

    const firstRender = useRef(true);

    useEffect(() => {
        setTodos(todoService.getAll());
    }, []);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        todoService.save(todos);
    }, [todos]);

    const addTodo = (text, dueDate = null, priority = "medium") => {
        const newTodo = {
            id: Date.now(),
            text,
            completed: false,
            createdAt: new Date().toISOString(),
            completedAt: null,
            dueDate: dueDate ? new Date(dueDate).toISOString() : null,
            priority, // 'low', 'medium', 'high'
        };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    const completed = !todo.completed;
                    return {
                        ...todo,
                        completed,
                        completedAt: completed
                            ? new Date().toISOString()
                            : null,
                    };
                }
                return todo;
            })
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const editTodo = (id, updates) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, ...updates } : todo
            )
        );
    };

    // Lọc công việc theo trạng thái
    const getFilteredTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        if (filter === "overdue") {
            return (
                !todo.completed &&
                todo.dueDate &&
                new Date(todo.dueDate) < new Date()
            );
        }
        if (filter === "upcoming") {
            return (
                !todo.completed &&
                todo.dueDate &&
                new Date(todo.dueDate) >= new Date()
            );
        }
        return true;
    });

    // Sắp xếp công việc
    const getSortedTodos = () => {
        const filteredTodos = getFilteredTodos;

        return [...filteredTodos].sort((a, b) => {
            let valueA, valueB;

            if (sortBy === "createdAt") {
                valueA = new Date(a.createdAt).getTime();
                valueB = new Date(b.createdAt).getTime();
            } else if (sortBy === "completedAt") {
                // Đưa các công việc chưa hoàn thành xuống cuối
                if (!a.completedAt) return sortOrder === "asc" ? 1 : -1;
                if (!b.completedAt) return sortOrder === "asc" ? -1 : 1;

                valueA = new Date(a.completedAt).getTime();
                valueB = new Date(b.completedAt).getTime();
            } else if (sortBy === "dueDate") {
                // Đưa các công việc không có hạn chót xuống cuối
                if (!a.dueDate) return sortOrder === "asc" ? 1 : -1;
                if (!b.dueDate) return sortOrder === "asc" ? -1 : 1;

                valueA = new Date(a.dueDate).getTime();
                valueB = new Date(b.dueDate).getTime();
            } else if (sortBy === "priority") {
                const priorities = { high: 3, medium: 2, low: 1 };
                valueA = priorities[a.priority] || 0;
                valueB = priorities[b.priority] || 0;
            }

            return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
        });
    };

    return {
        todos: getSortedTodos(),
        allTodos: todos,
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
    };
};

export default useTodos;
