import React from "react";
import CodeSlide from "../../spectacle-code-slide";
import code from "./code.example";

export default (
  <CodeSlide
    transition={[]}
    lang="js"
    code={code}
    ranges={[
      { loc: [0, 18], title: "lit-html", subtitle: "hello-world.js" },
      { loc: [4, 7] }
    ]}
  />
);

