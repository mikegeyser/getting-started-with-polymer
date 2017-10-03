import React from "react";
import { Slide, Image, List, ListItem } from "spectacle";
import { images } from "../images";

export default (
  <Slide bgColor="primary">
    <h1>
      <Image
        src={images.polymer_logo}
        margin="0px 0px -4px 0px"
        height="0.8em"
      />
      &nbsp;Polymer Project
    </h1>

    <List margin="0px 0px 0px 150px">
      <ListItem>Predict the Future</ListItem>
      <ListItem>Rethink frameworks</ListItem>
      <ListItem>Fast-forward the Platform</ListItem>
      <ListItem>jQuery for Web Components</ListItem>
    </List>
  </Slide>
);
