import React, { PureComponent } from "react";

import CSSTransitionDemo from "./transition/CSSTransition";
import SwitchTransitionDemo from "./transition/SwitchTransition";
import TransitionGroupDemo from "./transition/TransitionGroup";

export default class App extends PureComponent {
  render() {
    return (
      <div style={{ padding: "50px 50px 300px" }}>
        <h2>Hello, FLuoxetine!</h2>
        <hr />
        <CSSTransitionDemo />
        <hr />
        <SwitchTransitionDemo />
        <hr />
        <TransitionGroupDemo />
        <hr />
      </div>
    );
  }
}
