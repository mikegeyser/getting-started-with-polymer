import React from "react";
import { Slide, Image } from "spectacle";
import { images } from "../images";

export default (
  <Slide>
    <Image src={images.javascript_the_good_parts} height="300px" margin="15px 50px" />
    <Image src={images.v8} height="300px" margin="15px 50px" />
    <br /><br />
    <Image src={images.jquery} height="150px" margin="15px 50px" />
  </Slide>
);
