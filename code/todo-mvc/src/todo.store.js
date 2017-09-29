export class Todo {
  constructor(title) {
    this.completed = true;
    this.title = title.trim();
  }
}

export class TodoStore {
  constructor() {
    this.todos = [new Todo("This is a test?")];
  }

  add(newTodoTitle) {
    this.todos.push(new Todo(newTodoTitle));
  }
}
