import { Element as PolymerElement } from "../node_modules/@polymer/polymer/polymer-element.js";

export class CreateTodoComponent extends PolymerElement {
  static get template() {
    return `
            This is a sub component.
        `;
  }

  constructor() {
    super();
    this.name = "3.0 preview";
  }

  // properties, observers, etc. are identical to 2.x
  static get properties() {
    name: {
      Type: String;
    }
  }
}

customElements.define("create-todo", CreateTodoComponent);
