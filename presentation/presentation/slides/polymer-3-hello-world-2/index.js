import React from "react";
import CodeSlide from "../../spectacle-code-slide";
import code from "./code.example";

export default (
  <CodeSlide
    transition={[]}
    lang="js"
    code={code}
    ranges={[
      { loc: [0, 15], title: "Polymer 3", subtitle: "hello-world.js" },
      { loc: [0, 1] },
      { loc: [2, 3] },
      { loc: [3, 6] },
      { loc: [7, 12] },
      { loc: [14, 15] }
    ]}
  />
);

