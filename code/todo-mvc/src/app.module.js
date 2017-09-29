import { Element as PolymerElement } from "../node_modules/@polymer/polymer/polymer-element.js";
import { DomRepeat } from "../node_modules/@polymer/polymer/lib/elements/dom-repeat.js";
import { CreateTodoComponent } from "./create-todo.component.js";
import { TodoStore } from "./todo.store.js";

let template = `
<link rel="stylesheet" href="../node_modules/todomvc-app-css/index.css">
<section class="todoapp">

  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" 
           placeholder="What needs to be done?" 
           autofocus="" 
           value="{{newTodoText::change}}">
  </header>

  <section class="main">
    <ul class="todo-list">
      <template is="dom-repeat" items="[[todos]]" as="todo">
        <li class$="[[_todoStyles(todo)]]">
          <div class="view">
            <input class="toggle" type="checkbox" >
            <label>[[todo.title]]</label>
          </div>
        </li>
      </template> 
    </ul>
  </section>
</section>
`;

export class MyApp extends PolymerElement {
  static get template() {
    return template;
  }

  constructor() {
    super();
    this.store = new TodoStore();
    this.todos = this.store.todos;
  }

  static get properties() {
    return {
      newTodoText: {
        Type: String,
        observer: "addTodo"
      },
      todos: {
        Type: Array,
      }
    };
  }

  addTodo() {
    if (this.newTodoText.trim().length) {
      // this.push("todos", new Todo(this.newTodoText));
      // this.todos.push(new Todo(this.newTodoText));
      this.store.add(this.newTodoText);
      this.notifySplices("todos");
      this.newTodoText = "";
    }
  }

  _todoStyles(todo) {
    let styles = [];

    if (todo.completed) styles.push("completed");

    if (todo.editing) styles.push("editing");

    return styles.join(" ");
  }
}

customElements.define("my-app", MyApp);
