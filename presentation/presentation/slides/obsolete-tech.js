import React from "react";
import { Slide, Image } from "spectacle";
import { images } from "../images";

export default (
  <Slide>
    <Image src={images.flash} height="200px" margin="15px 50px" />
    <Image src={images.activex} margin="15px 50px" />
    <br />
    <Image src={images.java} height="300px" margin="15px 50px" />
    <Image src={images.silverlight} height="300px" margin="15px 50px" />
  </Slide>
);
