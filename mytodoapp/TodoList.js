function TodoList() {
        this.todos = [];
        this.currentDate = "";
}

TodoList.prototype.add = function (todo) {
    this.todos.push(todo);
}
// Prototypal Inheritance
