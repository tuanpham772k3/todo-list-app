const todoService = {
    //Lấy dữ liệu từ localStorage
    //Chuyển đổi => mảng object đề sử dụng trong javascript
    getAll: () => {
        const todos = localStorage.getItem("todos");
        return todos ? JSON.parse(todos) : [];
    },

    save: (todos) => {
        localStorage.setItem("todos", JSON.stringify(todos));
    },

    formatDate: (dateString) => {
        if (!dateString) return "";

        const date = new Date(dateString);
        return date.toLocaleDateString("vi-VN", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    },

    isOverdue: (todo) => {
        if (!todo.dueDate || todo.completed) return false;
        return new Date(todo.dueDate) < new Date();
    },
};

export default todoService;
