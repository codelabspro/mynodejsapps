angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {text:'learn angular', description: "Read the angular book", done:true, dueDate: "2016-4-10" },
      {text:'build an angular app', description: "Create the frontend for the app", done:false, dueDate: "2016-5-10"}
    ];

    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, description:todoList.todoDesc, done:false});
      todoList.todoText = '';
    };

    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });
