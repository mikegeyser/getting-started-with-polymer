export default
`import { PolyLitElement } from "...";
import "../node_modules/lit-html/lit-html.js";

export class HelloWorld extends PolLitElement {
  render() {
    return html\`<h1>Hello \${this.name}!</h1>\`;
  }

  static get properties() {
    return {
      name: String
    };
  }
}

customElements.define("hello-world", HelloWorld);
`;
