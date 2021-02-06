import React, { PureComponent } from "react";

import store from "../store";
import { addAction } from "../store/actionCreators";

export default class Home extends PureComponent {
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
        <h2>Home</h2>
        <h4>当前计数：{this.state.counter}</h4>
        <button onClick={(e) => this.increment()}>+1</button>
        <button onClick={(e) => this.addNumber(5)}>+5</button>
      </div>
    );
  }
  increment() {
    console.log("increment");
    store.dispatch(addAction(1));
  }
  addNumber(num) {
    console.log("addNumber");
    store.dispatch(addAction(num));
  }
}
