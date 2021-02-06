import React, { PureComponent } from "react";

import store from "../store";
import { subAction } from "../store/actionCreators";

export default class About extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: store.getState().counter,
    };
  }
  componentDidMount() {
    this.unSubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter,
      });
    });
  }
  componentWillUnmount() {
    this.unSubscribe();
  }
  render() {
    return (
      <div>
        <h2>About</h2>
        <h4>当前计数：{this.state.counter}</h4>
        <button onClick={(e) => this.decrement()}>-1</button>
        <button onClick={(e) => this.subNumber(5)}>-5</button>
      </div>
    );
  }
  decrement() {
    console.log("decrement");
    store.dispatch(subAction(1));
  }
  subNumber(num) {
    console.log("subNumber");
    store.dispatch(subAction(num));
  }
}