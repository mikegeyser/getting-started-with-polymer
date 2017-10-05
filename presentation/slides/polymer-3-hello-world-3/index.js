import React from "react";
import CodeSlide from "../../spectacle-code-slide";
import code from "./code.example";

export default (
  <CodeSlide
    transition={[]}
    lang="js"
    code={code}
    ranges={[
      { loc: [0, 32], title: "Polymer 3", subtitle: "hello-world.js" },
      { loc: [18, 22] },
      { loc: [6, 9] },
      { loc: [10, 11] },
      { loc: [1, 2] },
      { loc: [12, 13] },
      { loc: [25, 28] }
    ]}
  />
);

