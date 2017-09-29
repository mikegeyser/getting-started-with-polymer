import React from "react";
import CodeSlide from "../../spectacle-code-slide";
import code from "./code.example";

export default (
  <CodeSlide
    transition={[]}
    lang="html"
    code={code}
    ranges={[
      { loc: [0, 13], title: "Polymer 2", subtitle: "index.html" },
      { loc: [3, 5] },
      { loc: [5, 6] },
      { loc: [8, 10] }
    ]}
  />
);

