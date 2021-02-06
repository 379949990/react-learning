import React, { PureComponent } from "react";

import Home from './pages/home_5';
import About from './pages/about_5'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>Hello, FLuoxetine!</h2>
        <hr/>
        <Home/>
        <hr/>
        <About/>
      </div>
    );
  }
}
