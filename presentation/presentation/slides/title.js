import React from "react";
import { Heading, Slide, Text, Image } from "spectacle";
import { images } from "../images";

export default (
  <Slide bgColor="primary">
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      Getting started with
    </Heading>
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      Polymer 3.0
    </Heading>
    <Image src={images.polymer_logo} margin="0px auto 40px" height="293px" />
    <Text margin="10px 0 0" textColor="tertiary" size={1}>
      Mike Geyser
    </Text>
    <Text margin="10px 0 0" textColor="tertiary" size={1}>
      GDG Johannesburg
    </Text>
    <Text margin="10px 0 0" textColor="tertiary" size={1}>
      4 Oct 2017
    </Text>
  </Slide>
);
