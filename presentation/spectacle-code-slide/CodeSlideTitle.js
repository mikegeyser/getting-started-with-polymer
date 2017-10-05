import React from "react";
import { theme } from "../theme";

const h1Style = {
  position: "fixed",
  left: "50%",
  top: "20px",
  transform: "translate(-50%)",
  padding: "20px 40px",
  // border: `10px solid ${theme.screen.colors.tertiary}`,
  fontSize: "2.5em",
  color: theme.screen.colors.primary,
  // textTransform: 'uppercase',
  whiteSpace: "nowrap"
};

const h2Style = {
  position: "fixed",
  left: "50%",
  top: "110px",
  transform: "translate(-50%)",
  padding: "20px 40px",
  // border: `10px solid ${theme.screen.colors.tertiary}`,
  fontSize: "1.5em",
  fontWeight: "lighter",
  color: theme.screen.colors.primary,
  // textTransform: 'uppercase',
  whiteSpace: "nowrap"
};

export class CodeSlideTitle extends React.Component {
  render() {
    return <h1 style={h1Style}>{this.props.children}</h1>;
  }
}

export class CodeSlideSubTitle extends React.Component {
  render() {
    return <h4 style={h2Style}>{this.props.children}</h4>;
  }
}
