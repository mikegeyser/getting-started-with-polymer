import React from "react";
import { Slide, Image, List, ListItem } from "spectacle";
import { images } from "../images";

export default (
  <Slide bgColor="primary">
    <h1>
      <Image
        src={images.polymer_logo}
        margin="0px 0px -4px 0px"
        height="52px"
      />
      &nbsp;Polymer Project
    </h1>

    <List margin="0px 0px 0px 150px">
      <ListItem>0.5 - Nov 2014</ListItem>
      <ListItem>1.0 - May 2015</ListItem>
      <ListItem>2.0 - May 2017</ListItem>
      <ListItem>3.0 - Aug 2017</ListItem>
    </List>
  </Slide>
);
