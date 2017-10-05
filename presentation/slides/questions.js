import React from "react";
import { Heading, Slide, Image, Text } from "spectacle";
import { images } from "../images";

export default (
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary">
      Keep Calm
    </Heading>
    <Heading size={6} textColor="secondary">
      and
    </Heading>
    <Heading size={4} textColor="tertiary">
      #UseThePlatform
    </Heading>

    <div id="contact">
      <div id="twitter">
        <img src={images.twitter} />@mikegeyser
      </div>
      <div id="email">
        <img src={images.email} />michaelg@bbd.co.za
      </div>
      <div id="github">
        <img src={images.github} />github.com/mikegeyser
      </div>
      <div id="slack">
        <img src={images.slack} />zatech.co.za
      </div>
    </div>

    <div id="footer">
      <Image id="bbd" src={images.bbd} />
      <Image id="jozijs" src={images.jozijs} />
    </div>
  </Slide>
);
