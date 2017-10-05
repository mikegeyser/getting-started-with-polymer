export default
`import { Element as PolymerElement } from "...";
import "../node_modules/@polymer/paper-input/...";

export class HelloWorld extends PolymerElement {
  static get template() {
    return \`
    <h1>Hello [[name]]!</h1>

    <input value="{{name::change}}" />

    <paper-input value="{{name}}"></paper-input>
    
    <button on-click="clicked">Click me!</button>
    \`;
  }

  static get properties() {
    return {
      name: {
        type: String,
        notify: true
      }
    };
  }

  clicked() {
    console.log("Hello " + this.name);
  }
}

customElements.define("hello-world", HelloWorld);
`;
