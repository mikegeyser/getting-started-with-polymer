import React from "react";
import { Slide, Image, Text } from "spectacle";
import { images } from "../images";

export default (
  <Slide bgColor="primary">
    <Image src={images.coca_cola} height="64px" margin="15px" />
    <Image src={images.comcast} height="64px" margin="15px" />
    <Image src={images.google} height="64px" margin="15px" />
    <Image src={images.chrome} height="64px" margin="15px" />
    <br />
    <br />
    <Image src={images.ea} height="64px" margin="15px" />
    <Image src={images.netflix} height="64px" margin="15px" />
    <Image src={images.youtube} height="64px" margin="15px" />
    <br />
    <br />
    <Text>and many more...</Text>
  </Slide>
);
