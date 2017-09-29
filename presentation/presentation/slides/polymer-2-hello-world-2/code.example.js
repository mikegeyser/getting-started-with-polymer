export default
`<link rel="import" href="bower_components/polymer/...">

<dom-module id="hello-world">
  <template>
    <h2>Hello [[name]]!</h2>
  </template>

  <script>
    class HelloWorld extends Polymer.Element {
      static get is() { return 'hello-world'; }
      static get properties() {
        return {
          name: String
        };
      }
    }

    window.customElements.define(HelloWorld.is, HelloWorld);
  </script>
</dom-module>`;
