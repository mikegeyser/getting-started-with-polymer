import React from "react";
import CodeSlide from "../../spectacle-code-slide";
import code from "./code.example";

export default (
  <CodeSlide
    transition={[]}
    lang="html"
    code={code}
    ranges={[
      { loc: [0, 13], title: "Polymer 3", subtitle: "index.html" },
      { loc: [3, 4] },
      { loc: [5, 7] },
      { loc: [9, 11] }
    ]}
  />
);

