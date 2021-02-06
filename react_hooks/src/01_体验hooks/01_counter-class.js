import React, { PureComponent } from "react";

export default class CounterClass extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>Counter_Class</h2>
        <h3>Counter: {counter}</h3>
        <button onClick={(e) => this.calculate(1)}>+1</button>
        <button onClick={(e) => this.calculate(-1)}>-1</button>
      </div>
    );
  }
  calculate(num) {
    this.setState({
      counter: this.state.counter + num,
    });
  }
}
