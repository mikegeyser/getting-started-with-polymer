// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Slide } from "spectacle";

import { theme } from "./theme";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const slidesImports = [
  import("./slides/title"),
  import("./slides/introduction"),
  import("./slides/web-is-like-a-shark"),
  import("./slides/old-school"),
  import("./slides/obsolete-tech"),
  import("./slides/revolution"),
  import("./slides/polymer-project"),
  import("./slides/polymer-history"),
  import("./slides/who-uses-polymer"),
  import("./slides/polymer-2-hello-world-1"),
  import("./slides/polymer-2-hello-world-2"),
  import("./slides/polymer-2-pros-and-cons"),
  import("./slides/polymer-3-hello-world-1"),
  import("./slides/polymer-3-hello-world-2"),
  import("./slides/polymer-3-hello-world-3"),
  import("./slides/polymer-3-pros-and-cons"),
  import("./slides/lit-html"),
  import("./slides/polymer-3-lit-html"),
  import("./slides/tools"),
  import("./slides/webcomponent-support"),
  import("./slides/questions")
];

export default class Presentation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: Array(slidesImports.length).fill(<Slide key="loading" />)
    };
  }

  componentDidMount() {
    const importedSlides = [];
    Promise.all(slidesImports).then(slidesImportsResolved => {
      slidesImportsResolved.forEach(slide => {
        importedSlides.push(slide.default);
      });
      this.setState({ slides: importedSlides });
    });
  }

  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        {this.state.slides.map((slide, index) => {
          return React.cloneElement(slide, { key: index });
        })}
      </Deck>
    );
  }
}
