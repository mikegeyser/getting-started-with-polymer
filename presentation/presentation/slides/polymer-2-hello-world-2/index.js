import React from "react";
import CodeSlide from "../../spectacle-code-slide";
import code from "./code.example";

export default (
  <CodeSlide
    transition={[]}
    lang="js"
    code={code}
    ranges={[
      { loc: [0, 20], title: "Polymer 2", subtitle: "hello-world.html" },
      { loc: [0, 1] },
      { loc: [2, 3] },
      { loc: [3, 6] },
      { loc: [8, 9] },
      { loc: [9, 10] },
      { loc: [10, 16] },
      { loc: [17, 18] }
    ]}
  />
);

