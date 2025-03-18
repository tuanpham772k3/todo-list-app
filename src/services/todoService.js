const todoService = {
    //Lấy dữ liệu từ localStorage
    //Chuyển đổi => mảng object đề sử dụng trong javascript
    getAll: () => {
        const todos = localStorage.getItem("todos");
        console.log(todos);

        return todos ? JSON.parse(todos) : [];
    },

    //Save in localStorage theo dạng chuỗi JSON
    save: (todos) => {
        localStorage.setItem("todos", JSON.stringify(todos));
    },
};

export default todoService;
